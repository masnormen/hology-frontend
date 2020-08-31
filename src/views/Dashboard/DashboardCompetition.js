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
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import {getUserData, getAccessToken, getInstitutionName, invalidateSession} from "../../components/SessionHelper";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function checkValid(obj) {
  for (let key in obj) {
    if (obj[key] == null && obj[key] === "")
      return false;
  }
  return true;
}

const DashboardCompetition = () => {
  // stage 1: Daftar tim
  // stage 2: Biodata tim
  // stage 3: pembayaran tim
  const [registrationStage, setRegistrationStage] = useState(2);
  
  // For stage 1
  const [institutionName, setInstitutionName] = useState("");
  const [payload, setPayload] = useState({
    competition_id: "",
    institution_id: getUserData.institution_id,
    lead: getUserData.user_id,
    name: ""
  });
  const [isFailed, setIsFailed] = useState(false);
  const [isSending, setIsSending] = useState(false);
  
  // For stage 2
  const [teamData, setTeamData] = useState({});
  const [kartuMahasiswwa, setKartuMahasiswa] = useState([]);
  const [suratKeterangan, setSuratKeterangan] = useState([]);
  const [buktiBayar, setBuktiBayar] = useState([]);
  
  const competitionData = [
    {value: 1, label: "App Innovation"},
    {value: 2, label: "Business IT Case"},
    {value: 3, label: "Programming"},
    {value: 4, label: "Smart Device"},
    {value: 5, label: "Capture the Flag"},
    {value: 6, label: "Game Development"},
  ];
  
  useEffect(() => {
    if (registrationStage === 1) {
      const getInstitutionName = async () => {
        await fetch("https://multazamgsd.com/hology/api/institutions", {
          method: "GET"
        }).then(raw =>
          raw.json()
        ).then(res => {
          let name = res.data.find(x => x["institution_id"] === getUserData["institution_id"]);
          if (name != null) return name.institution_name.replace(/\\r\\n/g, "");
          return "There's some problem";
        }).then(name => {
          setInstitutionName(name);
        }).catch(e => {
          alert("Error!");
        });
      };
      getInstitutionName();
    }
    if (registrationStage === 2) {
      const getTeamData = async () => {
        await fetch("https://multazamgsd.com/hology/api/teams", {
          method: "GET",
          headers: {
            "Authorization": "Bearer " + getAccessToken,
            "Content-Type": "application/json"
          },
        }).then(raw =>
          raw.json()
        ).then(res => {
          setTeamData(res.data[0]);
        }).catch(e => {
          invalidateSession();
          alert("Error occurred. Please log in again.");
        });
      };
      getTeamData();
    }
  }, []);
  
  useEffect(() => {
    if (!isSending) return;
    
    if (!checkValid(payload)) {
      alert("Registration failed! Please check your inputed data!");
      setIsFailed(true);
      return;
    }
    
    fetch("https://multazamgsd.com/hology/api/teams", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + getAccessToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(raw => {
      return raw.json();
    }).then(res => {
      if (res["success"]) {
        alert("Your team has been succesfully registered!");
        setIsFailed(false);
      } else {
        alert("Registration failed! You can't create another team or your inputed data is wrong!");
        setIsFailed(true);
      }
      setIsSending(false);
    }).catch(err => {
      alert("Registration failed! You can't create another team or your inputed data is wrong!");
      setIsFailed(true);
      setIsSending(false);
    });
  }, [isSending]);
  
  useEffect(() => {
    console.log(payload);
  }, [payload]);
  
  
  return (
    <>
      {registrationStage === 1 && (
        <div className="dashboard-section-competition-selection">
          <div className="academy">
            <div className="header">
              <Header center size="r">
                Team Registration
              </Header>
            </div>
            <br/><br/>
            <Paragraph style={{maxWidth: "200px"}}>
              Ketua tim medaftarkan tim di sini.<br/>
              Anggota tim cukup mengakses link invitation untuk join ke tim.
            </Paragraph>
            <div className="description">
              <div className="selection">
                <label className="label">Kategori Competition</label>
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
                  onChange={(e) => setPayload({...payload, competition_id: e.value})}
                />
              </div>
              <div className="input-option">
                <Fieldinput
                  label="Nama Tim"
                  name="name_team"
                  type="text"
                  required
                  marbott
                  value={payload.name}
                  onChange={(e) => setPayload({...payload, name: e.target.value})}
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
              <Button onClicked={() => setIsSending(true)}>Register Team</Button>
            </div>
          </div>
        </div>
      )}
      {registrationStage === 2 && (
        <div className="dashboard-section-competition-data">
          <div className="view">
            <div className="data">
              <div className="header">
                <Header center size="r">
                  Data for team: {teamData.team_name}
                </Header>
              </div>
              <div className="team-member">
                <div className="header">
                  <Paragraph header>Team Member</Paragraph>
                </div>
                <Paragraph>1. John Doe</Paragraph>
                <Paragraph>2. John Doe</Paragraph>
                <Paragraph>3. John Doe</Paragraph>
              </div>
              <div className="link-team-container">
                <Paragraph header>Join Link (psstt, jaga baik-baik!)</Paragraph>
                <span className="link-container">
                  <span className="link-container--link">{teamData.team_join_link}</span>
                  <span className="icon-container" onClick={() => copy(teamData.team_join_link)}>
                    <MdContentCopy className="copy-icon"/>
                  </span>
                </span>
              </div>
              <div className="data-container">
                <div className="kartu-mahasiswa-container">
                  <div className="subtitle">
                    <Paragraph header>Upload Kartu Mahasiswa</Paragraph>
                  </div>
                  <FilePond
                    files={kartuMahasiswwa}
                    maxFiles="5MB"
                    server="http://192.168.33.10"
                    allowImageCrop
                    acceptedFileTypes={["application/csv", "text/csv"]}
                    onupdatefiles={setKartuMahasiswa}
                    dropValidation
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                  />
                </div>
                <div className="surat-keterangan-container">
                  <div className="subtitle">
                    <Paragraph header>
                      Upload Surat Keterangan Mahasiswa Aktif
                    </Paragraph>
                  </div>
                  <FilePond
                    files={suratKeterangan}
                    server="http://192.168.33.10"
                    acceptedFileTypes
                    onupdatefiles={setSuratKeterangan}
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                  />
                </div>
                <div className="bukti-bayar-container">
                  <div className="subtitle">
                    <Paragraph header>Upload Bukti Pembayaran</Paragraph>
                  </div>
                  <FilePond
                    files={buktiBayar}
                    maxFiles="5MB"
                    server="http://192.168.33.10"
                    allowImageCrop
                    acceptedFileTypes={["application/csv", "text/csv"]}
                    onupdatefiles={setBuktiBayar}
                    dropValidation
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardCompetition;
