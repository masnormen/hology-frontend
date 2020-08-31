import React, { useState } from "react";
import Select from "react-select";
import { copy } from "copy-to-clipboard";
import Paragraph from "../../components/Paragraph/Paragraph";
import "./DashboardSection.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Fieldinput from "../../components/Field-input/Fieldinput";
import { FilePond, registerPlugin } from "react-filepond";
import { MdContentCopy } from "react-icons/md";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
const DashboardCompetition = () => {
  const [sectionSelect, setsectionSelect] = useState(false);
  const [sectionData, setsectionData] = useState(true);
  const [kartuMahasiswwa, setKartuMahasiswa] = useState([]);
  const [suratKeterangan, setSuratKeterangan] = useState([]);
  const [buktiBayar, setBuktiBayar] = useState([]);
  const [linkTeam, setLinkTeam] = useState("https://hology.ub.ac.id/");
  const [copy, setCopy] = useState(false);
  const competitionData = [
    { value: "app innovation", label: "App Innovation" },
    { value: "business IT case", label: "Business IT Case" },
    { value: "programming", label: "Programming" },
    { value: "smart device", label: "Smart Device" },
    { value: "capture the flag", label: "Capture the Flag" },
    { value: "game development", label: "Game Development" },
  ];

  const gotoData = () => {
    setsectionSelect(false);
    setsectionData(true);
  };

  const copytoclipboard = () => {
    copy(linkTeam.toString());
    setCopy(true);
  };
  return (
    <>
      {sectionSelect ? (
        <div className="dashboard-section-competition-selection">
          <div className="academy">
            <div className="header">
              <Header center size="r">
                Competition
              </Header>
            </div>
            <div className="description">
              <Paragraph header large>
                Join The Online Competition
              </Paragraph>
              <div className="selection">
                <label className="label">Competition Category</label>
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
                  isClearable
                  isSearchable
                  name="competition"
                  options={competitionData}
                />
              </div>
              <div className="input-option">
                <Fieldinput
                  label="Team Name"
                  name="name_team"
                  type="text"
                  required
                  marbott
                />
              </div>
              <div className="input-option">
                <Fieldinput
                  label="Team Captain"
                  name="team_captain"
                  type="text"
                  required
                  marbott
                />
              </div>
              <Button onClicked={gotoData}>Register Competition</Button>
            </div>
          </div>
        </div>
      ) : null}
      {sectionData ? (
        <div className="dashboard-section-competition-data">
          <div className="view">
            <div className="data">
              <div className="header">
                <Header center size="r">
                  Team Name
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
                <Paragraph header>Link Join This Team</Paragraph>
                <span className="link-container">
                  <span className="link-container--link">{linkTeam}</span>
                  <span className="icon-container" onClick={copytoclipboard}>
                    <MdContentCopy className="copy-icon" />
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
                    allowMultiple
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
      ) : null}
    </>
  );
};

export default DashboardCompetition;
