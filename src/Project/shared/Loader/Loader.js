import React from "react";
import s from "./Loader.module.scss";

export default class Loader extends React.PureComponent{
    render () {
        return (
          <div className={s.howlfoldingcube}>
            <div className={`${s.howlcube1} ${s.howlcube}`}></div>
            <div className={`${s.howlcube2} ${s.howlcube}`}></div>
            <div className={`${s.howlcube4} ${s.howlcube}`}></div>
            <div className={`${s.howlcube3} ${s.howlcube}`}></div>
          </div>
        );
    }
}