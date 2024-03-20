
import React, { useState } from "react";
import helpIcon from "../images/Group 46.png";
import logo from "../images/moptro logo.png";
import "./User.css";
import { FaSearch } from "react-icons/fa";

const User = () => {
  const [userlist] = useState([
    {
      "id": 1,
      "name": "Arjun",
      "dob": "16-11-2000",
      "role": "Software Engineer"
    },
    {
      "id": 2,
      "name": "Mahesh",
      "dob": "15-01-2000",
      "role": "Software Developer"
    },
    {
      "id": 3,
      "name": "Rajesh",
      "dob": "16-10-2001",
      "role": "Devops Engineer"
    },
    {
      "id": 4,
      "name": "Arvind",
      "dob": "08-03-2000",
      "role": "Architect Engineer"
    },
    {
      "id": 5,
      "name": "Rakesh",
      "dob": "05-08-2000",
      "role": "Product Engineer"
    }
  ]);

  let [keyword, updateKeyword] = useState("");

  return (
    <div className="user-container">
      <div className="help-icon">
        <img src={helpIcon} alt="" />
      </div>
      <div className="company-logo">
        <img src={logo} alt="" />
        <div>4</div>
      </div>
      <div className="user-container-box">
        <div className="user-box-header">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search with Name"
              onChange={(obj) => updateKeyword(obj.target.value)}
            />
            <FaSearch style={{ marginLeft: "-2rem", color: "#FFFFFFB3" }} />
          </div>
        </div>
        <div className="user-box-body">
          {userlist.map((user, index) => {
            if (user.name.toLowerCase().includes(keyword.toLowerCase())) {
              return (
                <div key={index} className="user-box">
                  <div className="user-box-item">
                    EMP ID :{" "}
                    <div style={{ color: "white", marginLeft: "1rem" }}>
                      {user.id}
                    </div>
                    <div className="user-box-id">{user.id}</div>
                  </div>
                  <div className="user-box-item">
                    Name :{" "}
                    <div style={{ color: "white", marginLeft: "1rem" }}>
                      {user.name}
                    </div>
                  </div>
                  <div className="user-box-item">
                    DOB :{" "}
                    <div style={{ color: "orange", marginLeft: "1rem" }}>
                      {user.dob}
                    </div>
                  </div>
                  <div className="user-box-item">
                    Role :{" "}
                    <div style={{ color: "green", marginLeft: "1rem" }}>
                      {user.role}
                    </div>
                  </div>
                </div>
              );
            }
            return null; 
          })}
        </div>
      </div>
    </div>
  );
};

export default User;
