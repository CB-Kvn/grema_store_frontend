

import { AddressInfo, PersonalInfo, ProfileInfo } from "../../interfaces/login_interface_gre_sto";
import {add_address_info, add_personal_info, add_profile_info, counter_page } from "../../redux/reducers_slices/handler_gre_sto_slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";


export const ButtonNavPage = ({data}:{data:ProfileInfo|AddressInfo|PersonalInfo|string}) => {
  const dispatch = useAppDispatch();

  const {page} = useAppSelector((state) => state.handler.info_user);

  const handleForm = (type: string) => {
    let num = 0 | page;
   
    switch (type) {
      case "max":
        num += 1;
        switch(num){
            case 1:
                dispatch(add_personal_info({personal:data}))
            break;
            case 2:
                dispatch(add_profile_info({profile:data}))
            break;
            case 3:
                dispatch(add_address_info({address:data}))
            break;
        }
        break;
      case "minus":
        num -= 1;
        break;
    }
    dispatch(counter_page({page:num}));
  };

  return (
    <div className="flex items-center justify-between mt-72">
      <button
        className="btn btn-active btn-neutral w-20"
        style={{
          backgroundColor: "#F6DAEF",
          borderColor: "#9b5176",
          color: "#95806b",
          visibility: page !== 0 ? "visible" : "hidden",
        }}
        onClick={() => handleForm("minus")}
      >
        <svg
          height="45px"
          width="200px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#000000"
          transform="matrix(-1, 0, 0, -1, 0, 0)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <polygon
              points="256,57.191 307.745,256 256,454.808 503.83,256 "
              style={{ fill: "rgb(176, 120, 148)" }}
            ></polygon>{" "}
            <polygon
              points="256,57.191 449.362,256 256,454.808 256,389.447 8.17,389.447 8.17,122.553 256,122.553 "
              style={{ fill: "rgb(155, 81, 118)" }}
            ></polygon>{" "}
            <circle cx="331.711" cy="332.255" r="8.17"></circle>{" "}
            <circle cx="111.66" cy="190.638" r="8.17"></circle>{" "}
            <circle cx="155.234" cy="212.425" r="8.17"></circle>{" "}
            <path d="M508.942,249.626L261.112,50.818c-2.451-1.966-5.813-2.351-8.646-0.992c-2.833,1.36-4.636,4.223-4.636,7.366v57.191H8.17 c-4.512,0-8.17,3.657-8.17,8.17v266.894c0,4.513,3.658,8.17,8.17,8.17h107.574c4.512,0,8.17-3.657,8.17-8.17s-3.658-8.17-8.17-8.17 H16.34V130.723H256c4.512,0,8.17-3.657,8.17-8.17V74.22L490.773,256L264.17,437.78v-48.333c0-4.513-3.658-8.17-8.17-8.17H148.426 c-4.512,0-8.17,3.657-8.17,8.17s3.658,8.17,8.17,8.17h99.404v57.191c0,3.143,1.803,6.007,4.636,7.366 c1.124,0.539,2.332,0.804,3.533,0.804c1.825,0,3.635-0.611,5.113-1.796l247.83-198.809c1.934-1.551,3.058-3.896,3.058-6.374 S510.876,251.177,508.942,249.626z"></path>{" "}
          </g>
        </svg>
      </button>

      <button
        className="btn btn-active btn-neutral  w-20"
        style={{
          backgroundColor: "#F6DAEF",
          borderColor: "#9b5176",
          color: "#95806b",
          visibility: page !== 3 ? "visible" : "hidden",
        }}
        onClick={() => handleForm("max")}
      >
        <svg
          height="45px"
          width="200px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <polygon
              points="256,57.191 307.745,256 256,454.808 503.83,256 "
              style={{ fill: "rgb(176, 120, 148)" }}
            ></polygon>{" "}
            <polygon
              points="256,57.191 449.362,256 256,454.808 256,389.447 8.17,389.447 8.17,122.553 256,122.553 "
              style={{ fill: "rgb(155, 81, 118)" }}
            ></polygon>{" "}
            <circle cx="331.711" cy="332.255" r="8.17"></circle>{" "}
            <circle cx="111.66" cy="190.638" r="8.17"></circle>{" "}
            <circle cx="155.234" cy="212.425" r="8.17"></circle>{" "}
            <path d="M508.942,249.626L261.112,50.818c-2.451-1.966-5.813-2.351-8.646-0.992c-2.833,1.36-4.636,4.223-4.636,7.366v57.191H8.17 c-4.512,0-8.17,3.657-8.17,8.17v266.894c0,4.513,3.658,8.17,8.17,8.17h107.574c4.512,0,8.17-3.657,8.17-8.17s-3.658-8.17-8.17-8.17 H16.34V130.723H256c4.512,0,8.17-3.657,8.17-8.17V74.22L490.773,256L264.17,437.78v-48.333c0-4.513-3.658-8.17-8.17-8.17H148.426 c-4.512,0-8.17,3.657-8.17,8.17s3.658,8.17,8.17,8.17h99.404v57.191c0,3.143,1.803,6.007,4.636,7.366 c1.124,0.539,2.332,0.804,3.533,0.804c1.825,0,3.635-0.611,5.113-1.796l247.83-198.809c1.934-1.551,3.058-3.896,3.058-6.374 S510.876,251.177,508.942,249.626z"></path>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
};
