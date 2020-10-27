import React, {useEffect, useRef, useState} from "react";
import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./DashboardSection.scss";
import Header from "../../components/Header/Header";
import Fieldinput from "../../components/Field-input/Fieldinput";
import {FilePond, registerPlugin} from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import {getAccessToken, getUserData, setUserData} from "../../components/SessionHelper";

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

const DashboardAcademy = () => {
  const [isRegisterAcademy, setIsRegisterAcademy] = useState(false);
  const [noHp, setNoHp] = useState(null);
  const fileUploader = useRef(null);
  
  useEffect(() => {
    if (!isRegisterAcademy) return;
    
    if (fileUploader.current.getFile() == null || noHp == null || noHp === "") {
      alert("Complete the form!")
      setIsRegisterAcademy(false)
      return;
    }
    
    let data = new FormData();
    data.append("phone", noHp);
    data.append("resume", fileUploader.current.getFile().file);
    
    fetch("https://multazamgsd.com/hology/api/academy", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + getAccessToken
      },
      body: data
    })
      .then((raw) => {
        return raw.json();
      })
      .then((res) => {
        if (res["success"]) {
          let newData = getUserData;
          newData["academy"] = res.data.academy;
          setUserData(newData);
          window.location.reload();
          console.log("success!");
        } else {
          alert("Failed! Please contact IT support");
        }
      })
      .catch((e) => alert("Error! Please contact IT support"));
    setIsRegisterAcademy(false);
  }, [isRegisterAcademy]);
  
  return (
    <div className="dashboard-section-academy">
      <div className="academy">
        <div className="header">
          <Header center size="r">
            GO-Academy
          </Header>
        </div>
        {getUserData != null && getUserData.institution_id !== 174 ? (
          <div className="description">
            <Paragraph header>
              Maaf. Academy hanya untuk mahasiswa Universitas Brawijaya.
            </Paragraph>
          </div>
        ) :
        getUserData != null && getUserData.academy.length === 0 ? (
          // NOT REGISTERED
          <>
            <div className="description">
              <Paragraph>
                Nomor HP:
              </Paragraph>
              <div className="input-option">
                <Fieldinput
                  name="nohp"
                  type="number"
                  required
                  marbott
                  value={noHp}
                  onChange={(e) =>
                    setNoHp(e.target.value)
                  }
                />
              </div>
              <Paragraph>
                Unggah CV/Résumé:
              </Paragraph>
              <br/>
              <div className="form-container">
                <div className="filepond-container">
                  <FilePond
                    maxFiles="2MB"
                    name="resume"
                    checkValidity
                    dropValidation
                    allowMultiple={false}
                    acceptedFileTypes={["application/pdf"]}
                    ref={fileUploader}
                    ins
                    // acceptedFileTypes={["image/png", "image/jpeg"]}
                    labelIdle='<span class="filepond--label-action">Klik untuk memilih file</span> atau drag-drop ke sini (.pdf max 2MB)'
                  />
                </div>
              </div>
            </div>
            <br/><br/>
            <Button onClicked={() => setIsRegisterAcademy(true)}>Daftar Academy</Button>
          </>
        ) : (
          <>
            <div className="description">
              <Paragraph header>
                Anda telah terdaftar.<br/>Silakan tunggu untuk pengumuman peserta terpilih!
              </Paragraph>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardAcademy;
