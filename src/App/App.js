import React from "react";

import './App.css';
import {UserInfo} from "../UserInfo/UserInfo";
import {people} from "../data/users";

export const App = () => <ul><UserInfo users={people}/></ul>;
