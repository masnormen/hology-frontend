import React, { useEffect, useState } from "react";
// import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./DashboardSection.scss";
import Header from "../../components/Header/Header";
// import Fieldinput from "../../components/Field-input/Fieldinput";
//filepond
// import { FilePond, registerPlugin } from "react-filepond";
// import "filepond/dist/filepond.min.css";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

const DashboardAcademy = () => {
  // const [isRegisterAcademy, setIsRegisterAcademy] = useState(false);
  return (
    <div className="dashboard-section-academy">
      <div className="academy">
        <div className="header">
          <Header center size="r">
            Academy
          </Header>
        </div>
        <Paragraph header>Coming Soon</Paragraph>
        {/* {isRegisterAcademy ? (
          <>
            <div className="description">
              <Paragraph header>
                Upload berkas untuk mendaftar GoAcademy
              </Paragraph>
            </div>
            <div className="form-container">
              <p className="label-filepond">Upload CV</p>
              <div className="filepond-container">
                <FilePond
                  maxFiles="2MB"
                  name="payment_proof"
                  checkValidity
                  dropValidation
                  // server={{
                  //   process: {
                  //     withCredentials: false,
                  //     url: `https://multazamgsd.com/hology/api/teams/${teamData.team_id}/payment-proof`,
                  //     headers: {
                  //       Authorization: "Bearer " + getAccessToken,
                  //     },
                  //     onerror: (res) =>
                  //       alert(JSON.parse(res).message.payment_proof[0]),
                  //   },
                  // }}
                  // acceptedFileTypes={["image/png", "image/jpeg"]}
                  labelIdle='<span class="filepond--label-action">Klik untuk memilih file</span> atau drag-drop ke sini (.pdf max 2MB)'
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="description">
              <Paragraph header>
                Silahkan Daftarkan Diri Anda di GoAcademy
              </Paragraph>
            </div>
            <Button onClicked={() => setIsRegisterAcademy(true)}>
              Register
            </Button>
          </>
        )} */}
      </div>
    </div>
  );
};

export default DashboardAcademy;
