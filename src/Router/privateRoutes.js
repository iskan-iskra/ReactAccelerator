import CharacterProfile from "../Pages/Characters/CharacterProfile"
import CharactersList from "../Pages/Characters/CharactersList"
import EpisodeProfile from "../Pages/Episodes/EpisodeProfile"
import EpisodesList from "../Pages/Episodes/EpisodesList"
import CharacterFilter from "../Pages/Filter/CharacterFilter"
import LocationFilter from "../Pages/Filter/LocationFilter"
import LocationFilterMeasure from "../Pages/Filter/LocationFilterMeasure"
import LocationFilterType from "../Pages/Filter/LocationFilterType"
import LocationProfile from "../Pages/Locations/LocationProfile"
import LocationsList from "../Pages/Locations/LocationsList"
import Main from "../Pages/Main/Main"
import Settings from "../Pages/Settings/Settings"
import UpdateProfile from "../Pages/Settings/UpdateProfile"



const privateRoutes = [
    {path: '/', component: Main, exact: true},
    {path: '/Characters', component: CharactersList, exact: true},
    {path: '/Locations', component: LocationsList, exact: true},
    {path: '/Episodes', component: EpisodesList, exact: true},
    {path: '/Settings', component: Settings, exact: true},
    {path: '/Character/:id', component: CharacterProfile, exact: false},
    {path: '/Location/:id', component: LocationProfile, exact: false},
    {path: '/Episode/:id', component: EpisodeProfile, exact: false},
    {path: '/Characters/Filter', component: CharacterFilter, exact: false},
    {path: '/Locations/Filter', component: LocationFilter, exact: true},
    {path: '/Locations/Filter/Type', component: LocationFilterType, exact: false},
    {path: '/Locations/Filter/Measure', component: LocationFilterMeasure, exact: false},
    {path: '/Settings/UpdateProfile', component:UpdateProfile, exact: false}
]
export default privateRoutes