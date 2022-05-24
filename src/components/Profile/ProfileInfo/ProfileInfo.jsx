import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import unknown from "../../../assets/images/unknown.webp"
import StatusWithHooks from "./Status/StatusWithHooks";
import React, {useState} from "react";
import {Field, Form, Formik} from "formik";

function ProfileInfo(props) {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) props.savePhoto(e.target.files[0])
    }

    if (!props.profile) return <Preloader/>
    return (
        <div>
            <div className={s.profile}>
                <div className={s.avatar}>
                    <img
                        src={props.profile.photos.large ? props.profile.photos.large : unknown}
                        alt=""/>
                    {props.isOwner && <input onChange={onMainPhotoSelected} type="file"/>}
                </div>
                <div className={s.info}>
                    <div className={s.userName}>{props.profile.fullName}</div>
                    <StatusWithHooks {...props}/>
                    <ProfileData isOwner={props.isOwner} profile={props.profile} saveProfile={props.saveProfile}/>
                </div>
            </div>
        </div>
    )
}

function Contact({contactName, contactValue}) {
    return (
        <div className={s.contact}>{contactName}: {contactValue}</div>
    )
}

function ProfileData({isOwner, profile, saveProfile}) {
    const [editMode, setEditMode] = useState(false);
    const goToEditMode = () => {
        setEditMode(true)
    }
    if (!editMode) {
        return <div>
            <div className={s.description}>
                <div className={s.aboutMe}>About me: {profile.aboutMe}</div>
                <div className={s.lookingForAJob}>Looking For A
                    Job: {profile.lookingForAJob ? 'Ищу работу' : 'Работу не ищу'}</div>
                <div className={s.jobDescription}>Looking For A Job
                    Description: {profile.lookingForAJobDescription}</div>
            </div>
            <div className={s.contacts}>
                <div className={s.contactsTitle}>Contacts:</div>
                {Object.keys(profile.contacts).map((key) => {
                    return <Contact key={key} contactName={key} contactValue={profile.contacts[key]}/>
                })}
            </div>
            {isOwner && <button onClick={goToEditMode} className={s.editMode}>Edit mode</button>}
        </div>
    } else {
        return <ProfileDataForm saveProfile={saveProfile} profile={profile} setEditMode={setEditMode}/>
    }
}

function ProfileDataForm({saveProfile, profile, setEditMode}) {
    let {fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts} = profile
    return <div>
        <Formik
            initialValues={{fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts: {...contacts}}}
            onSubmit={(values, {setSubmitting, setStatus}) => {
                saveProfile(values, setStatus).then(() => {
                    setEditMode(false)
                })
                setSubmitting(false);
            }}
        >
            {({isSubmitting, status}) => (
                <Form className={s.form}>
                    {status ? <div className={s.statusError}>{status}</div> : null}
                    <div className={s.formRow}>
                        <label className={s.label} htmlFor="fullName">Full Name</label>
                        <Field component="input" type="text" name="fullName" className={s.aboutMe} id="fullName"/>
                    </div>
                    <div className={s.formRow}>
                        <label className={s.label} htmlFor="aboutMe">About me</label>
                        <Field component="textarea" name="aboutMe" className={s.aboutMe} id="aboutMe"/>
                    </div>
                    <div className={s.formRow}>
                        <label className={s.label} htmlFor="lookingForAJob">Looking For A Job</label>
                        <Field type="checkbox" name="lookingForAJob" className={s.lookingForAJob} id="lookingForAJob"/>
                    </div>
                    <div className={s.formRow}>
                        <label className={s.label} htmlFor="lookingForAJobDescription">Looking For A Job
                            Description</label>
                        <Field component="textarea" name="lookingForAJobDescription" className={s.aboutMe}
                               id="lookingForAJobDescription"/>
                    </div>
                    <div className={s.fromContactsTitle}>Contacts:</div>

                    {Object.keys(contacts).map((key) => {
                        return <ContactInput key={key} contactName={key}/>
                    })}

                    <button type="submit" disabled={isSubmitting} className={s.editMode}>Save</button>
                </Form>
            )}
        </Formik>
    </div>
}

function ContactInput({contactName}) {
    return (
        <div className={s.formRow}>
            <label className={s.label} htmlFor={contactName}>{contactName}</label>
            <Field component="input" placeholder={contactName} type="text" name={"contacts." + contactName} className={s.input}
                   id={contactName}/>
        </div>
    )
}

export default ProfileInfo;