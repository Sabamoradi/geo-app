// types . . .

export interface State {
  status: 'idle' | 'loading' | 'failed';
};

export interface SearchIp{
  ip:string;
  country_code2:string;
  country_code3:string;
  country_name:string;
  country_name_official:string;
  state_prov:string;
  state_code:string;
  district:string;
  city:string;
  zipcode:string;
  latitude:string;
  longitude:string;
}