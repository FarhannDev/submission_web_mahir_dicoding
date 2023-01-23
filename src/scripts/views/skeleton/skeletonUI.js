/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
const skeletonUIHome = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="card-home">
      <div class="card-content-poster">
        <img src="./placeholder.png" alt="skeleton" width="100%" height="200px">
      </div>
      <div class="card-body">
        <div class="card-body-content">
          <h2></h2>
          <p></p>
        </div>
      </div>
    </div>
      
    `;
  }

  return template;
};

export { skeletonUIHome };
