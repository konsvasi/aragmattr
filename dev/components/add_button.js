import React, { Component } from 'react';

const Button = () => {
  return <button onClick= { create } className="addButton btn btn-default" type="button">
        +
    </button>
}

let create = () => { alert('New aragmatiki created')};

export default Button;
