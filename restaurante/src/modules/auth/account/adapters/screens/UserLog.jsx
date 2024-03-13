import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Loading from '../../../../../kernel/components/Loading';
import Profile from './Profile';
import UserGuest from '../../../login/adapters/screens/UserGuest'

export default function UserLog(props) {
    const {navigation}= props;
    const [session, setSession] = useState = (null)
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setSession(true);
                const uid = user.uid;
                setSession(false);
            } else {

            }
        });
    },[])
    if(session==null) {
        return ( <Loading isShow={true} title="Cargando"/>);
    }else
    return (session? <Profile/> : <UserGuest/>)
}