import React from "react";
// Preloader
import { Preloader, ThreeDots } from "react-preloader-icon";

function GeoInfo({ geoData }) {
  const isLoadingData = geoData === "";

  return (
    <article className="geo-ctn">
      <div className="geo-info">
        <p>ip address</p>
        <h2>
          {isLoadingData ? (
            <Preloader
              use={ThreeDots}
              size={35}
              strokeWidth={6}
              strokeColor="hsl(0, 0%, 75%)"
              duration={2000}
            />
          ) : (
            geoData.ip
          )}
        </h2>
      </div>
      <div className="line"></div>
      <div className="geo-info">
        <p>location</p>
        <h2>
          {isLoadingData ? (
            <Preloader
              use={ThreeDots}
              size={35}
              strokeWidth={6}
              strokeColor="hsl(0, 0%, 75%)"
              duration={2000}
            />
          ) : (
            geoData.location.region +
            ", " +
            geoData.location.country +
            " " +
            geoData.location.postalCode
          )}
        </h2>
      </div>
      <div className="line"></div>
      <div className="geo-info">
        <p>timezone</p>
        <h2>
          {isLoadingData ? (
            <Preloader
              use={ThreeDots}
              size={35}
              strokeWidth={6}
              strokeColor="hsl(0, 0%, 75%)"
              duration={2000}
            />
          ) : (
            "UTC" + geoData.location.timezone
          )}
        </h2>
      </div>
      <div className="line"></div>
      <div className="geo-info">
        <p>isp</p>
        <h2>
          {isLoadingData ? (
            <Preloader
              use={ThreeDots}
              size={35}
              strokeWidth={6}
              strokeColor="hsl(0, 0%, 75%)"
              duration={2000}
            />
          ) : (
            geoData.isp
          )}
        </h2>
      </div>
    </article>
  );
}

export default GeoInfo;
