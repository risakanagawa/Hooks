import React from "react";

export default function List(props) {
  console.log(props);

  const photos = props.data ? (
    props.data.map(photo => (
      <div key={photo.id} className="item">
        <div
          style={{
            backgroundImage: `url(${photo.urls.small})`,
            width: "400px",
            height: "500px",
            backgroundPosition: "center" /* Center the image */,
            backgroundRepeat: "no-repeat" /* Do not repeat the image */,
            backgroundSize:
              "cover" /* Resize the background image to cover the entire container */
          }}
        >
        </div>
        <div className="hover">
            <div className="text">
            <p>Taken by {photo.user.name}</p>
            <p className='link'>
              <a href={photo.links.html}>Go to the site →</a>
            </p>
            </div>
          </div>
      </div>
    ))
  ) : (
    <div className="loading">Loading</div>
  );

  return <div className="grid">{photos}</div>;
}
