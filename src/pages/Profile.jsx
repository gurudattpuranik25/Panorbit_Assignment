import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/Context";
import "../styles/profile.css";
import loader from "../assets/loader.gif";
import SideMenu from "../components/SideMenu";
import UserHeader from "../components/UserHeader";
import Chats from "../components/Chats";

function AccountDetails() {
  // const { userId } = useParams();

  // const { userAccounts } = useContext(UserContext);

  // const selectedItem = userAccounts[userId - 1];

  const { getUser, userAccounts } = useContext(UserContext);

  const selectedItem = getUser();

  return (
    <div className="profile__home">
      <div className="profile__page">
        <SideMenu activeLink="profile" />
        <div className="profile__details">
          {!selectedItem ? (
            <img className="loading" src={loader} alt="" />
          ) : (
            <div className="user__details">
              <UserHeader pageTitle="Profile" selectedItem={selectedItem} />
              <div className="user__info__section">
                <div className="user__info">
                  <img
                    src={selectedItem.profilepicture}
                    alt="profile_picture"
                    className="profile__image"
                  />
                  <h3 className="name">{selectedItem.name}</h3>
                  <div className="personal__details">
                    <div className="key__value">
                      <span>Username : </span>
                      <p>{selectedItem.username}</p>
                    </div>
                    <div className="key__value">
                      <span>email : </span>
                      <p>{selectedItem.email}</p>
                    </div>
                    <div className="key__value">
                      <span>Phone : </span>
                      <p>{selectedItem.phone}</p>
                    </div>
                    <div className="key__value">
                      <span>website : </span>
                      <p>{selectedItem.website}</p>
                    </div>
                  </div>
                  <div className="border"></div>
                  <span>Company</span>
                  <div className="company__details">
                    <div className="key__value">
                      <span>Name : </span>
                      <p>{selectedItem.company.name}</p>
                    </div>
                    <div className="key__value">
                      <span>catchphrase : </span>
                      <p>{selectedItem.company.catchPhrase}</p>
                    </div>
                    <div className="key__value">
                      <span>bs : </span>
                      <p>{selectedItem.company.bs}</p>
                    </div>
                  </div>
                </div>
                <div className="vertical__border"></div>
                <div className="user__address">
                  <div className="address">
                    <span>Address </span>
                    <div className="key__value">
                      <span>Street: </span>
                      <p>{selectedItem.address.street}</p>
                    </div>
                    <div className="key__value">
                      <span>Suite: </span>
                      <p>{selectedItem.address.suite}</p>
                    </div>
                    <div className="key__value">
                      <span>City: </span>
                      <p>{selectedItem.address.city}</p>
                    </div>
                    <div className="key__value">
                      <span>Zipcode:</span>
                      <p>{selectedItem.address.zipcode}</p>
                    </div>
                  </div>
                  <div className="map">
                    <iframe
                      src={`https://maps.google.com/maps?q=${selectedItem.address.geo.lat},${selectedItem.address.geo.lng}&output=embed`}
                      width="450"
                      height="260"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="geo__location">
                      <p className="latitude">
                        {" "}
                        Lat : {selectedItem.address.geo.lat}
                      </p>
                      <p className="longitude">
                        {" "}
                        Lng : {selectedItem.address.geo.lng}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Chats userAccounts={userAccounts} selectedItem={selectedItem} />
    </div>
  );
}

export default AccountDetails;
