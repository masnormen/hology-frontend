import React, {useEffect, useState} from "react";
import Select from "react-select";
import copy from "copy-to-clipboard";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./DashboardSection.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Fieldinput from "../../components/Field-input/Fieldinput";
import {FilePond, registerPlugin} from "react-filepond";
import {MdContentCopy} from "react-icons/md";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import {
  getUserData,
  getAccessToken,
  invalidateSession,
} from "../../components/SessionHelper";
import {FaCheckCircle} from "react-icons/fa";

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

function checkValid(obj) {
  for (let key in obj) {
    if (obj[key] == null && obj[key] === "") return false;
  }
  return true;
}

function isGoogleDriveURL(url) {
  let isValidURL = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
  let isGoogleDrive = /(drive.google.com)/g;
  return isValidURL.test(url) && isGoogleDrive.test(url);
}

const DashboardCompetition = () => {
  // stage 1: Daftar tim
  // stage 2: Biodata tim
  // stage 3: pembayaran tim
  // stage 4: submission tim
  const [currentCompetition, setCurrentCompetition] = useState(0);
  const [currentTeam, setCurrentTeam] = useState(0);
  
  const [registrationStage, setRegistrationStage] = useState(0);
  
  // For stage 1
  const [institutionName, setInstitutionName] = useState("");
  const [payload, setPayload] = useState({
    competition_id: currentCompetition,
    institution_id: getUserData.institution_id,
    lead: getUserData.user_id,
    name: "",
  });
  const [isFailed, setIsFailed] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // For stage 2
  const [teamData, setTeamData] = useState({});
  
  const [kartuMahasiswwa, setKartuMahasiswa] = useState(false);
  const [suratKeterangan, setSuratKeterangan] = useState(false);
  const [buktiBayar, setBuktiBayar] = useState(false);
  
  const competitionData = [
    {value: 1, label: "Business IT Case"},
    {value: 2, label: "Game Development"},
    {value: 3, label: "App Innovation"},
    {value: 4, label: "Programming"},
    {value: 5, label: "Smart Device"},
    {value: 6, label: "Capture the Flag"},
  ];
  
  const assignmentData = [
    {value: 1, data: "https://drive.google.com/file/d/1xSezAdN67aBtTUR1blxLUZcGnF904CGv/preview"},
    {value: 2, data: "-"},
    {value: 3, data: "-"},
    {value: 4, data: "email"},
    {value: 5, data: "-"},
    {value: 6, data: "email"},
  ];
  
  useEffect(() => {
    if (!isSending) return;
    
    if (!checkValid(payload)) {
      alert("Registration failed! Please check your inputed data!");
      setIsFailed(true);
      return;
    }
    
    fetch("https://multazamgsd.com/hology/api/teams/", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + getAccessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((raw) => {
        return raw.json();
      })
      .then((res) => {
        if (res["success"]) {
          alert("Your team has been succesfully registered!");
          setIsFailed(false);
          window.location.reload();
        } else {
          alert(
            "Registration failed! You can't create another team or your inputed data is wrong!"
          );
          setIsFailed(true);
        }
        setIsSending(false);
      })
      .catch((e) => {
        alert(
          "Registration failed! You can't create another team or your inputed data is wrong!"
        );
        setIsFailed(true);
        setIsSending(false);
      });
  }, [isSending]);
  
  useEffect(() => {
    if (currentCompetition === 0) return;
    setPayload({...payload, competition_id: currentCompetition});
    
    // let currentTeam = getUserData.teams.find(x => x.competition_id === currentCompetition);
    const getRegStage = async () => {
      let currentTeam = await fetch(
        "https://multazamgsd.com/hology/api/profiles",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + getAccessToken,
          },
        }
      )
        .then((raw) => raw.json())
        .then((res) => {
          let matchedTeam = res.data.teams.find(
            (x) => x.competition_id === currentCompetition
          );
          return matchedTeam;
        })
        .then((team) => {
          setCurrentTeam(team);
          if (team != null) {
            if (team.team_status === 1) setRegistrationStage(3);
            else setRegistrationStage(2);
          } else {
            setRegistrationStage(1);
          }
        })
        .catch((e) => {
          alert("Failed fetching user's teams. Reload page or log in again.");
        });
    };
    getRegStage();
  }, [currentCompetition]);
  
  useEffect(() => {
    if (registrationStage === 1) {
      if (institutionName !== "") return;
      const getInstitutionName = async () => {
        await fetch("https://multazamgsd.com/hology/api/institutions", {
          method: "GET",
        })
          .then((raw) => raw.json())
          .then((res) => {
            let name = res.data.find(
              (x) => x["institution_id"] === getUserData["institution_id"]
            );
            if (name != null)
              return name.institution_name.replace(/\\r\\n/g, "");
            return "There's some problem";
          })
          .then((name) => {
            setInstitutionName(name);
          })
          .catch((e) => {
            alert.log("Failed fetching institution. Reload page.");
          });
      };
      getInstitutionName();
    }
    if (registrationStage === 2 || registrationStage === 3) {
      const getTeamData = async () => {
        await fetch(
          "https://multazamgsd.com/hology/api/teams/" + currentTeam.team_id,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + getAccessToken,
              "Content-Type": "application/json",
            },
          }
        )
          .then((raw) => raw.json())
          .then((res) => {
            if (res.data.team_payment_proof !== "") setBuktiBayar(true);
            let myTeamData = res.data.members.find(
              (x) => x.user_id === getUserData.user_id
            );
            if (myTeamData.user_identity_pic !== "") setKartuMahasiswa(true);
            if (myTeamData.user_proof !== "") setSuratKeterangan(true);
            setTeamData(res.data);
            setIsLoading(false);
          })
          .catch((e) => {
            invalidateSession();
            alert("Error occurred. Please log in again.");
          });
      };
      getTeamData();
    }
  }, [registrationStage]);
  
  // for stage 4
  const [link, setLink] = useState("");
  const [isSubmitSubmission, setIsSubmitSubmission] = useState(false);
  
  useEffect(() => {
    console.log(link);
    if (!isSubmitSubmission) return;
    if (!isGoogleDriveURL(link)) {
      alert("Link tidak valid!");
      return;
    }
    fetch(
      `https://multazamgsd.com/hology/api/teams/${currentTeam.team_id}/submissions`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + getAccessToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({link}),
      }
    )
      .then((raw) => {
        return raw.json();
      })
      .then((res) => {
        if (res["success"]) {
          alert("Berhasil mengirim submission!");
        } else {
          alert("Pengiriman submission gagal. Silahkan cek format submission.");
        }
      })
      .catch((err) => {
        alert("Ada kesalahan!");
      });
    setIsSubmitSubmission(false);
  }, [isSubmitSubmission]);
  
  return (
    <>
      {currentCompetition === 0 && (
        <div className="dashboard-section-competition-selection">
          <div className="academy">
            <div className="header">
              <Header center size="r">
                Dashboard
              </Header>
            </div>
            <div className="description">
              <div className="selection">
                <Paragraph>
                  Pilih jenis competition untuk menuju dashboard tim.
                </Paragraph>
                <br/>
                <br/>
                <Select
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: "#519a9e",
                      primary: "#1f81a0",
                    },
                  })}
                  className="basic-single"
                  classNamePrefix="select"
                  name="competition"
                  options={competitionData}
                  onChange={(e) => setCurrentCompetition(e.value)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/*TEAM NOT REGISTERED*/}
      {currentCompetition !== 0 && registrationStage === 1 && (
        <div className="dashboard-section-competition-selection">
          <div className="academy">
            <Button
              variant="secondary"
              onClicked={() => {
                setCurrentCompetition(0);
                setRegistrationStage(0);
              }}
            >
              &larr; Kembali
            </Button>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="header">
              <Header center size="r">
                {
                  competitionData.find((x) => x.value === currentCompetition)
                    .label
                }
              </Header>
            </div>
            <br/>
            <br/>
            <Paragraph style={{maxWidth: "200px"}}>
              Ketua tim mendaftarkan tim di sini.
              <br/>
              Anggota tim cukup mengakses link invitation yang didapatkan ketua
              tim untuk join ke tim.
            </Paragraph>
            <br/>
            <br/>
            <br/>
            <div className="description">
              <div className="input-option">
                <Fieldinput
                  label="Nama Tim"
                  name="name_team"
                  type="text"
                  required
                  marbott
                  value={payload.name}
                  onChange={(e) =>
                    setPayload({...payload, name: e.target.value})
                  }
                />
              </div>
              <div className="input-option">
                <Fieldinput
                  disabled
                  label="Ketua Tim (Anda)"
                  name="team_captain"
                  type="text"
                  value={getUserData.user_fullname}
                  required
                  marbott
                />
              </div>
              <div className="input-option">
                <Fieldinput
                  disabled
                  label="Institusi"
                  name="institution"
                  type="text"
                  value={institutionName}
                  required
                  marbott
                />
              </div>
              <br/>
              <br/>
              <Button onClicked={() => setIsSending(true)}>
                Register Team
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/*REGISTERED TEAM*/}
      {teamData.members != null && registrationStage === 2 && (
        <div className="dashboard-section-competition-data">
          <div className="view">
            <div className="data">
              <Button
                variant="secondary"
                onClicked={() => {
                  setCurrentCompetition(0);
                  setRegistrationStage(0);
                }}
              >
                &larr; Kembali
              </Button>
              <br/>
              <br/>
              <br/>
              <br/>
              <Paragraph header>
                Untuk dapat diverifikasi, setiap tim wajib melengkapi bukti
                pembayaran. Dan setiap anggota wajib melengkapi KTM & surat
                aktif kuliah/KRS/Riwayat studi.
              </Paragraph>
              <br/>
              <br/>
              <Paragraph>Kelengkapan berkas:</Paragraph>
              {!isLoading &&
              teamData.members.map((item, index) => (
                <Paragraph key={index}>
                  {index + 1}. {item.user_fullname} (KTM:{" "}
                  {item.user_identity_pic === "" ? "❌" : "✅"} Surat
                  Aktif/KRS/Riwayat Studi:{" "}
                  {item.user_proof === "" ? "❌" : "✅"})
                </Paragraph>
              ))}
              <br/>
              <br/>
              <br/>
              <br/>
              <div className="header">
                <Header center size="r">
                  Berkas Team: {teamData.team_name}
                </Header>
                <br/>
                <Paragraph>
                  Competition:{" "}
                  {
                    competitionData.find((x) => x.value === currentCompetition)
                      .label
                  }
                </Paragraph>
              </div>
              <div className="link-team-container">
                <Paragraph header>Secret invitation link:</Paragraph>
                <span className="link-container">
                  <span className="link-container--link">
                    {teamData.team_join_url}
                    <br/>
                    <br/>
                    Keep this secret!
                  </span>
                  <span
                    className="icon-container"
                    onClick={() => copy(teamData.team_join_url)}
                  >
                    <MdContentCopy className="copy-icon"/>
                  </span>
                </span>
              </div>
              {/*<div className="team-member">*/}
              {/*  <div className="header">*/}
              {/*    <Paragraph header>Anggota Tim:</Paragraph>*/}
              {/*  </div>*/}
              {/*  {!isLoading &&*/}
              {/*  teamData.members.map((item, index) => (*/}
              {/*    <Paragraph key={index}>*/}
              {/*      {index + 1}. {item.user_fullname}*/}
              {/*    </Paragraph>*/}
              {/*  ))}*/}
              {/*</div>*/}
              <div className="data-container">
                <div className="bukti-bayar-container">
                  <div className="subtitle">
                    <Paragraph header>Upload Bukti Pembayaran:</Paragraph>
                  </div>
                  {buktiBayar && (
                    <>
                      <Paragraph>
                        <FaCheckCircle height="14px" color="#00b900"/> File
                        telah diupload. Tunggu verifikasi atau perbaiki file
                        Anda jika salah:
                      </Paragraph>
                      <br/>
                      <br/>
                    </>
                  )}
                  <FilePond
                    maxFiles="2MB"
                    name="payment_proof"
                    checkValidity
                    dropValidation
                    server={{
                      process: {
                        withCredentials: false,
                        url: `https://multazamgsd.com/hology/api/teams/${teamData.team_id}/payment-proof`,
                        headers: {
                          Authorization: "Bearer " + getAccessToken,
                        },
                        onerror: (res) =>
                          alert(JSON.parse(res).message.payment_proof[0]),
                      },
                    }}
                    acceptedFileTypes={["image/png", "image/jpeg"]}
                    labelIdle='<span class="filepond--label-action">Klik untuk memilih file</span> atau drag-drop ke sini (.jpg/.png max 2MB)'
                  />
                </div>
              </div>
              <br/>
              <br/>
              <div className="header">
                <Header center size="r">
                  Berkas Account: {getUserData.user_fullname}
                </Header>
              </div>
              <br/>
              <br/>
              <div className="data-container">
                <div className="kartu-mahasiswa-container">
                  <div className="subtitle">
                    <Paragraph header>Upload Kartu Mahasiswa:</Paragraph>
                  </div>
                  {kartuMahasiswwa && (
                    <>
                      <Paragraph>
                        <FaCheckCircle height="14px" color="#00b900"/> File
                        telah diupload. Tunggu verifikasi atau perbaiki file
                        Anda jika salah:
                      </Paragraph>
                      <br/>
                      <br/>
                    </>
                  )}
                  <FilePond
                    maxFiles="2MB"
                    name="identity"
                    checkValidity
                    dropValidation
                    server={{
                      process: {
                        withCredentials: false,
                        url: `https://multazamgsd.com/hology/api/teams/${teamData.team_id}/identity-pics`,
                        headers: {
                          Authorization: "Bearer " + getAccessToken,
                        },
                        onerror: (res) =>
                          alert(JSON.parse(res).message.identity[0]),
                      },
                    }}
                    acceptedFileTypes={["image/png", "image/jpeg"]}
                    labelIdle='<span class="filepond--label-action">Klik untuk memilih file</span> atau drag-drop ke sini (.jpg/.png max 2MB)'
                  />
                </div>
                <div className="surat-keterangan-container">
                  <div className="subtitle">
                    <Paragraph header>
                      Upload Surat Keterangan Mahasiswa Aktif / Riwayat Studi /
                      KRS :
                    </Paragraph>
                  </div>
                  {suratKeterangan && (
                    <>
                      <Paragraph>
                        <FaCheckCircle height="14px" color="#00b900"/> File
                        telah diupload. Tunggu verifikasi atau perbaiki file
                        Anda jika salah:
                      </Paragraph>
                      <br/>
                      <br/>
                    </>
                  )}
                  <FilePond
                    maxFiles="2MB"
                    name="proof"
                    checkValidity
                    dropValidation
                    server={{
                      process: {
                        withCredentials: false,
                        url: `https://multazamgsd.com/hology/api/teams/${teamData.team_id}/proofs`,
                        headers: {
                          Authorization: "Bearer " + getAccessToken,
                        },
                        onerror: (res) =>
                          alert(JSON.parse(res).message.proof[0]),
                      },
                    }}
                    acceptedFileTypes={["application/pdf"]}
                    labelIdle='<span class="filepond--label-action">Klik untuk memilih file</span> atau drag-drop ke sini (.pdf max 2MB)'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/*VERIFIED TEAM*/}
      {teamData.members != null && registrationStage === 3 && (
        <div className="dashboard-section-competition-data">
          <div className="view">
            <div className="data">
              <Button
                variant="secondary"
                onClicked={() => {
                  setCurrentCompetition(0);
                  setRegistrationStage(0);
                }}
              >
                &larr; Kembali
              </Button>
              <br/>
              <br/>
              <br/>
              <br/>
              <div>
                <Header center size="r">
                  {competitionData.find((x) => x.value === currentCompetition).label} Case
                </Header>
                <br/>
                
                {isGoogleDriveURL(assignmentData.find((x) => x.value === currentCompetition).data) && (
                  <>
                    <iframe
                      id="iframeSoal"
                      src={assignmentData.find((x) => x.value === currentCompetition).data}
                    />
                    <br/>
                    <br/>
                    <a
                      target="_blank" rel="noreferrer noopener"
                      href={assignmentData.find((x) => x.value === currentCompetition).data}
                    >
                      <Button variant="secondary">
                        Open file a new tab &rarr;
                      </Button>
                    </a>
                  </>
                )}
                
                {assignmentData.find((x) => x.value === currentCompetition).data === "email" && (
                  <Paragraph>
                    Cek e-mail Anda untuk case/soal lomba yang bersangkutan.
                  </Paragraph>
                )}
  
                {assignmentData.find((x) => x.value === currentCompetition).data === "-" && (
                  <Paragraph>
                    Silakan cek guidebook untuk panduan pengerjaan lomba.
                  </Paragraph>
                )}
                
                <br/>
                <br/>
                <br/>
                <br/>
                
                {currentCompetition !== 4 || currentCompetition !== 6 && (
                  <>
  
                    <Header center size="r">
                      Submission
                    </Header>
                    <br/>
                    <Paragraph>
                      Competition: {competitionData.find((x) => x.value === currentCompetition).label} <br/>
                      Team: {teamData.team_name}
                    </Paragraph>
                    <br/>
                    <Paragraph>
                      PERHATIAN:
                    </Paragraph>
                    <br/>
                    <Paragraph>
                      1) Link file/folder pada Google Drive harus dapat diakses oleh panitia HOLOGY 3.0 dengan cara mengeset
                      permission ke Public atau dengan opsi "Get Shareable Link".
                    </Paragraph>
                    <br/>
                    <Paragraph>
                      2) Pengiriman link submisi hanya bisa dilakukan SATU KALI dan TIDAK DAPAT DIUBAH KEMBALI
                      DENGAN ALASAN APAPUN. Pastikan link yang Anda masukkan sudah BENAR dan FINAL!
                    </Paragraph>
                    <br/>
                    <Paragraph>
                      3) Apabila peserta didapati telah memodifikasi/menambah/merevisi/mengubah apapun pada submisinya
                      dengan alasan apapun setelah pengiriman link dilakukan, maka submisi dianggap tidak valid dan peserta
                      akan DIDISKUALIFIKASI.
                    </Paragraph>
                    <br/>
                    <br/>
  
                    {currentTeam.submissions.length > 0 && (
                      <Paragraph>
                        Submisi telah dilakukan ✅
                      </Paragraph>
                    )}
  
                    {currentTeam.submissions.length === 0 && (
                      <>
                        <Fieldinput
                          label="Link Google Drive submisi:"
                          name="submission"
                          type="url"
                          fullWidth
                          required
                          marbott
                          value={link}
                          onChange={(e) => setLink(e.target.value)}
                        />
                        {link !== "" && isGoogleDriveURL(link) && (
                          <Paragraph>
                            Link Google Drive valid ✅
                          </Paragraph>
                        )}
                        {link !== "" && !isGoogleDriveURL(link) && (
                          <Paragraph>
                            Link Google Drive tidak valid ❌
                          </Paragraph>
                        )}
                        <br/>
                        <Button onClicked={() => setIsSubmitSubmission(true)}>
                          Submit
                        </Button>
                      </>
                    )}
                    
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardCompetition;
