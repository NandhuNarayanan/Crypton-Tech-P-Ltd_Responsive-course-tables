import React from "react";
import CourseTable from "../../components/courseTable/CourseTable";
import "./courseApp.scss";

function CourseApp() {
  return (
    <>
      <div>
        <div className="courses-head">
          <div>
            <h2>My Courses</h2>
          </div>
          <span>View All</span>
        </div>
        <div>
          <CourseTable />
        </div>
      </div>
    </>
  );
}

export default CourseApp;
