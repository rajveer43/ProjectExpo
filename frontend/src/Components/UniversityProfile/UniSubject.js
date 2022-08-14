import SubCard from "./SubCard";
import React, { useEffect, useState } from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";
import Button from "../Common/Button";
import ProfileInputField from "../Profile/ProfileInputField";
import ProfileInputFieldExtended from "../Profile/ProfileInputFieldExtended";
import SideBarOption from "../Profile/SideBarOption";
import axios from "axios";
import "./UniProfile.css";
import { NavLink } from "react-router-dom";
import SubjectCard from "./SubjectCard";

function UniSubject() {
  const handleClick = () => {};
  const [user, setUser] = useState();

  const sendRequest = async () => {
    const res = await axios
      .get(
        "http://localhost:5000/api/college/collegeId/62f8724e92cfa9015a3befc9"
      )
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    console.log("-----");
    return data;
  };

  const [sub, setSub] = useState();

  const sendRequest2 = async () => {
    const res = await axios
      .get(
        "http://localhost:5000/api/department/getByCollgeId/62f8724e92cfa9015a3befc9"
      )
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    console.log("-----");
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setUser(data.college));
    console.log("-----------+");

    console.log(user);

    sendRequest2().then((data) => setSub(data.departments));
    console.log("-----------+");
    console.log(sub);
  }, []);

  return (
    <>
      {sub && (
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "left",
            paddingTop: "20px",
            paddingLeft: "20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                position: "sticky",
                top: "0",
                padding: "15px",
              }}
            >
              <div style={{ marginTop: "auto", marginBottom: "auto" }}>
                <div className="profile w-5 h-5">
                  <img
                    src="https://www.bvmengineering.ac.in/images/BVM%20Logo-1.png"
                    className="w-110 h-110 rounded-circle"
                    height="100px"
                  />
                </div>
              </div>
              <div
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                <div
                  style={{
                    // marginTop: 50,
                    marginLeft: 20,
                    fontFamily: "poppins",
                    fontWeight: "bold",
                    fontSize: 22,
                    textAlign: "start",
                  }}
                >
                  {user && user.CName.substring(0, 17)}..
                </div>

                <div
                  style={{
                    marginLeft: 20,
                    fontSize: 16,
                    color: "#9B9B9B",
                    fontWeight: "500",
                  }}
                >
                  {user && user.CollegeEmail}
                </div>
              </div>
            </div>
            {/* horizontal line */}
            <div style={{ border: "2px solid #F5F7F9", marginTop: 20 }}></div>

            {/* options */}
            <div style={{ position: "sticky", top: "130px", padding: "10px" }}>
              <NavLink
                className=""
                style={{ textDecoration: "none", color: "black" }}
                to="/collegeprofile"
              >
                <SideBarOption icon="person" title="Profile" />
              </NavLink>

              <NavLink
                className=""
                style={{ textDecoration: "none", color: "black" }}
                to="/collegedepartment"
              >
                <SideBarOption icon="book" title="Department" />
              </NavLink>

              <NavLink
                className=""
                style={{ textDecoration: "none", color: "black" }}
                to="/collegefaculty"
              >
                <SideBarOption icon="groups" title="Faculty" />
              </NavLink>

              <NavLink
                className=""
                style={{ textDecoration: "none", color: "black" }}
                to="/collegesubjects"
              >
                <SideBarOption icon="groups" title="Subjects" />
              </NavLink>
            </div>
          </div>

          <div
            style={{
              border: "2px solid #F5F7F9",
              // height: "-webkit-fill-available",
              // marginTop: "auto",
              // marginBottom: "auto",
              marginLeft: 20,
            }}
          >
            {/* this is for line */}
          </div>

          {/* profile section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "auto",
              marginLeft: "auto",
              textAlign: "start",
              marginLeft: 40,
              width: "-webkit-fill-available",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              <div
                style={{
                  fontFamily: "poppins",
                  fontWeight: "600",
                  fontSize: 26,
                  marginLeft: 30,
                }}
              >
                Subject Available
              </div>
              <div
                style={{
                  border: "2px solid #F5F7F9",
                  marginLeft: "auto",
                  marginRight: "auto",
                  height: 1,
                  marginTop: 5,
                  width: "-webkit-fill-available",
                }}
              ></div>
            </div>

            <div>
              <div className="container">
                <div className="row">
                  {sub.map((data, index) => (
                    <>
                      <h4 className="my-10 py-10">{data.DepartName}</h4>
                      <SubjectCard key={index} subid={data._id} />
                    </>
                  ))}
                 
                </div>
              </div>
            </div>
            <div className="" style={{ paddingBottom: "30px" }}></div>

            <div
              style={{
                marginTop: 20,
                justifyContent: "end",

                display: "flex",
                marginBottom: "50px",
                marginRight: "20px",
              }}
            >
              <Button title={"+ Add Subject"} onClick={handleClick} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UniSubject;
