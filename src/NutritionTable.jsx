import React from "react";

const NutritionTable = ({ nutrients }) => {
  return (
    <div>
      <div className="container box2">
        <h2>Nutrition Facts</h2>
      </div>
      <div className="container box">
        <table>
          <thead>
            <tr>
              <th>Nutrient</th>
              <th>Quantity</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            {nutrients.map(({ label, quantity, unit }, index) => (
              <tr key={index}>
                <td>{label}</td>
                <td>{parseFloat(quantity).toFixed(2)}</td>
                <td>{unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NutritionTable;
