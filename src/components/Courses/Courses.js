import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('./course.JSON')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  const handlePurchase = (course) => {
    const updatedCart = [...cart, course];
    setCart(updatedCart);
  }

  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-md-9">
          <div className='row row-cols-1 row-cols-md-3 g-2'>
            {
              courses.map(course => <Course
                course={course}
                key={course.id}
                handlePurchase={handlePurchase}
              ></Course>)
            }
          </div>
        </div>
        <div className="col-md-3">
          <Cart cart={cart}></Cart>
        </div>
      </div>

    </div>
  );
};

export default Courses;