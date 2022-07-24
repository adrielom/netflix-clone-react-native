import { createContext, useContext, useState } from "react"

export type ProfileStruct = {
  name: string, 
  source: string
}

export interface IProfile {
  profile: ProfileStruct,
  setProfile: (profile: ProfileStruct) => void
}
const defaultProfile: IProfile = {
  profile: {
    name: "User",
  } as ProfileStruct,
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