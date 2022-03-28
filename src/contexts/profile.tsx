import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

export interface IProfile {
  profile: string,
  setProfile: (profile: string) => void
}
const defaultProfile: IProfile = {
  profile: '',
  setProfile: () => {}
}

export const ProfileContext = createContext<IProfile>(defaultProfile) 

export const ProfileProvider = ({children}:any)  => {

  const [profile, setProfile] = useState(defaultProfile.profile);  

  return (
    <ProfileContext.Provider value={{profile, setProfile}}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => useContext(ProfileContext)                                                                                                                                                                            