export interface MasterlistByGroupCodeAllResponse {
  [groupCode: string]: MasterlistCode[];
}

export interface MasterlistByGroupCodeResponse {
  data: MasterlistCode[];
  message: string;
  status: string;
}

export interface MasterlistCode {
  description: string;
  mastListDefaultValue: string;
  mastListExtendValue1: string;
  mastListExtendValue2: string;
  mastListExtendValue3: string;
  mastListExtendValue4: string;
  mastListExtendValue5: string;
  masterListCdeName: string;
  masterListCode: string;
  masterListGroupCde: string;
  masterListID: number;
}

export interface MasterlistByGroupCodeRequest {
  groupCode: string;
}
