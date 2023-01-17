import React from "react";
import arrivalInformation from "./data/arrival_information.json";
import servicesAndAmenities from "./data/services_and_amenities.json";
import accessibility from "./data/accessibility.json";

const getDecodedString = (str) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
};

const HotelInfo = () => {
  return (
    <div className="scene" id="hotelinfo">
      <article className="heading">
        <h1>Essential Info</h1>
      </article>
      <article id="usefulinfo">
        <section id="arrivalinfo">
          <h2>Arrival Information</h2>
          <ul>
            {arrivalInformation.map((text, index) => {
              return (
                <li key={index + "arrivalInformation"}>
                  <strong>{text.strong}</strong> {text.normal}
                </li>
              )
            })}
          </ul>
        </section>
        <section className="checklist" id="services">
          <h2>Services and Amenities</h2>
          <p>
            Our services and amenities are designed to make your travel easy,
            your stay comfortable, and your experience one-of-a-kind.
          </p>
          <ul>
            {servicesAndAmenities.map((service, index) => {
              return (
                <li key={index + "servicesAndAmenities"}>{getDecodedString(service.text)}</li> // so HTML special char &amp; renders as an ampersand i.e. &
              )
            })}
          </ul>
        </section>
        <section className="checklist" id="accessibility">
          <h2>Accessibility</h2>
          <p>
            We&apos;re committed to maintaining the same quality of service for every
            individual. We offer the following facilities for those with special
            needs:
          </p>
          <ul>
            {accessibility.map((service, index) => {
              return (
                <li key={index + "accessibility"}>{getDecodedString(service.text)}</li> // so HTML special char &amp; renders as an ampersand i.e. &
              )
            })}
          </ul>
        </section>
      </article>
      <article id="greenprogram">
        <h2>Landon Green Program</h2>
        <p>
          <strong>The Landon Hotel - London</strong> was recently renovated, and
          we considered the impact on the earth the entire way. From green
          building materials, to solar power, to energy-friendly lighting and
          appliances throughout the hotel - we’re saving energy in every socket,
          outlet, and switch. We’ve also initiated a recycling and composting
          program that reduces the load to local landfills, while providing
          valuable raw material for use in new products, or in the case of
          compost, for use in local gardens and landscapes.
        </p>
      </article>
    </div>
  );
};

export default HotelInfo;
