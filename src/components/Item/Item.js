import React from 'react';

const Item = (props) => {
  const { title, image, price } = props.item;
  // console.log(props.title);

  return (
    <div>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={image} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-title fw-bold">{title}</p>
              <p class="card-text"><small class="text-muted">$ {price}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;