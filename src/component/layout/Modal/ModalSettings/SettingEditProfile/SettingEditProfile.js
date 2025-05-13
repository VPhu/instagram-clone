import React, { useState } from "react";
import styles from "./SettingEditProfile.module.css";

const SettingEditProfile = () => {
  const [countTextBio, setCountTextBio] = useState(0);
  const [gender, setGender] = useState("");
  const [customGender, setCustomGender] = useState("");

  const handleInputBio = (e) => {
    setCountTextBio(e.target.value.length);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    if (e.target.value !== "custom") {
      setCustomGender("");
    }
  };

  const handleCustomGenderChange = (e) => {
    setCustomGender(e.target.value);
  };
  return (
    <div className={styles.settingEditProfile}>
      <div className={styles.settingEditProfileWrapper}>
        <h2 className="titleModalSettingItem">Notifications</h2>
        <div className={styles.settingEditProfileContainer}>
          <div className={styles.changePhotoSetting}>
            <div className={styles.changePhotoWrapper}>
              <div className={styles.myAvatarWrapper}>
                <img
                  className={styles.myAvatar}
                  src="https://cdn.pixabay.com/photo/2023/11/21/13/29/computer-8403409_1280.jpg"
                  alt=""
                />
              </div>
              <div className={styles.myInfo}>
                <span className={styles.myUsername}>levinfoux</span>
                <span className={styles.myFullname}>Lê Văn Phú</span>
              </div>
            </div>
            <div className={styles.changePhotoBtn}>
              <span>Change photo</span>
            </div>
          </div>
          <div className={styles.editProfileWebsite}>
            <span className={styles.editTitle}>Website</span>
            <div className={styles.editWebsiteInputWrapper}>
              <input
                className={styles.editWebsiteInput}
                type="text"
                disabled
                placeholder="Website"
              />
            </div>
            <span className={styles.editProfileDesciption}>
              Editing your links is only available on mobile. Visit the
              Instagram app and edit your profile to change the websites in your
              bio.
            </span>
          </div>
          <div className={styles.editProfileBio}>
            <span className={styles.editTitle}>Bio</span>
            <div className={styles.editBioInputWrapper}>
              <input
                onChange={handleInputBio}
                className={styles.editBioInput}
                type="text"
                placeholder="Bio"
              />
              <div className={styles.coutNumberTextInputBio}>
                {countTextBio} / 150
              </div>
            </div>
          </div>
          <div className={styles.editProfileShowThreads}>
            <span className={styles.editTitle}>Show Threads badge</span>
            <div className={styles.selectEditProfile}>
              <span className={styles.subselect}>Show Threads badge</span>
              <label className={styles.switch}>
                <input type="checkbox" />
                <span className={styles.slider}></span>
              </label>
            </div>
          </div>
          <div className={styles.editProfileGender}>
            <span className={styles.editTitle}>Gender</span>
            <div className={styles.selectEditProfile}>
              <select
                value={gender}
                onChange={handleGenderChange}
                className={styles.genderSelect}
              >
                <option value="">Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="custom">Custom</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
              {gender === "custom" && (
                <div>
                  <input
                    type="text"
                    placeholder="Enter custom gender"
                    value={customGender}
                    onChange={handleCustomGenderChange}
                    className={styles.customGenderInput}
                  />
                </div>
              )}
            </div>
            <span className={styles.editProfileDesciption}>
              This won't be part of your public profile.
            </span>
          </div>
          <div className={styles.editProfileSuggestions}>
            <span className={styles.editTitle}>
              Show account suggestions on profiles
            </span>
            <div className={styles.selectEditProfile}>
              <div className={styles.subselectText}>
                <span className={styles.subselect}>
                  Show account suggestions on profiles
                </span>
                <span className={styles.suggestionsDesciption}>
                  Choose whether people can see similar account suggestions on
                  your profile, and whether your account can be suggested on
                  other profiles.
                </span>
              </div>
              <div className={styles.selectWrapper}>
                <label className={styles.switch}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
          </div>
          <div className={styles.descriptionFooterEditProfile}>
            <div className={styles.descriptionFoote}>Certain profile info, like your name, bio and links, is visible to everyone. <a href="https://help.instagram.com/347751748650214?ref=igweb" target="_blank" rel="noopener noreferrer" className={styles.linkHelp}>See what profile info is visible</a></div>
          </div>
          <div className={styles.btnSubmitEditProfileWrapper}>
            <div className={styles.btnSubmitEditProfile}>
                <span className={styles.btnSubmitText}>Submit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingEditProfile;
