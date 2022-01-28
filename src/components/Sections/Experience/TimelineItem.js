import timelineData from "./timelineData";
import React from "react";
import "./timeline.css";

const TimelineItem = () => {
  return (
    <div className="container">
      <div className="timeline">
        <ul>
          <li>
            <div className="timeline-content">
              <h3 className="date text-gray-400">{timelineData[0].date}</h3>
              <h1 className="text-2xl md:text-xl text-green-700">
                {timelineData[0].position}
              </h1>
              <p className="text-xl md:text-lg p-5 text-amber-400">
                {timelineData[0].description}
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date text-gray-400">{timelineData[1].date}</h3>
              <h1 className="text-3xl md:text-2xl text-green-700">
                {timelineData[1].position}
              </h1>
              <p className="text-xl md:text-lg p-5 text-amber-400">
                {timelineData[1].description}
              </p>
              <div className="p-5">
                <p className="text-md md:text-sm text-cyan-700">
                  {timelineData[1].contact1}
                </p>
                <p className="text-sm text-red-600">
                  {timelineData[1].contactDesc1}
                </p>
              </div>

              <div className="p-5">
                <p className="text-md md:text-sm text-cyan-700">
                  {timelineData[1].contact2}
                </p>
                <p className="text-sm text-red-600">
                  {timelineData[1].contactDesc2}
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date text-gray-400">{timelineData[2].date}</h3>
              <h1 className="text-3xl md:text-2xl text-green-700">
                {timelineData[2].position}
              </h1>
              <p className="text-xl md:text-lg p-5 text-amber-400">
                {timelineData[2].description}
              </p>
              <div className="p-5">
                <p className="text-md md:text-sm text-cyan-700">
                  {timelineData[2].contact1}
                </p>
                <p className="text-sm text-red-600">
                  {timelineData[2].contactDesc1}
                </p>
              </div>
              <div className="p-5">
                <p className="text-md md:text-sm text-cyan-700">
                  {timelineData[2].contact2}
                </p>
                <p className="text-sm text-red-600">
                  {timelineData[2].contactDesc2}
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date text-gray-400 ">{timelineData[3].date}</h3>
              <h1 className="text-3xl md:text-2xl text-green-700">
                {timelineData[3].position}
              </h1>
              <p className="text-xl md:text-lg p-5 text-amber-400">
                {timelineData[3].description}
              </p>
              <div className="p-5">
                <p className="text-md md:text-sm text-cyan-700">
                  {timelineData[3].contact1}
                </p>
                <p className="text-sm text-red-600">
                  {timelineData[3].contactDesc1}
                </p>
              </div>

              <div className="p-5">
                <p className="text-md md:text-sm text-cyan-700">
                  {timelineData[3].contact2}
                </p>
                <p className="text-sm text-red-600">
                  {timelineData[3].contactDesc2}
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-content ">
              <h3 className="date text-gray-400">{timelineData[4].date}</h3>
              <h1 className="text-3xl md:text-2xl text-green-700">
                {timelineData[4].position}
              </h1>
              <p className="text-xl md:text-lg p-5 text-amber-400">
                {timelineData[4].description}
              </p>
              <div className="p-5">
                <p className="text-md md:text-sm text-cyan-700">
                  {timelineData[4].contact1}
                </p>
                <p className="text-sm text-red-600">
                  {timelineData[4].contactDesc1}
                </p>
              </div>

              <div className="p-5">
                <p className="text-md md:text-sm text-cyan-700">
                  {timelineData[4].contact2}
                </p>
                <p className="text-sm text-red-600">
                  {timelineData[4].contactDesc2}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
