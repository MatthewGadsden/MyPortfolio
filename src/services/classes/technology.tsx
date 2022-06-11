import React, { ReactElement } from "react";
import { TechEnum } from "../../context/enums/technologies";
import { ReactComponent as ReactIcon } from '../../assets/svgs/React-icon.svg';

interface TechInput {
  techType: TechEnum;
}

export class Technology implements TechInput {
  techType: TechEnum;

  constructor(techType: TechEnum){
    this.techType = techType;
  };

  describe = () : string => {
    return TechEnum[this.techType];
  }

  getIconFileString = () : ReactElement => {
    switch(this.techType){
      case TechEnum.React:
        return <ReactIcon/>
      default:
        return <svg/>;
    }
  }
}