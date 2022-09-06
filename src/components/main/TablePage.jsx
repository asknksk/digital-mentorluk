import React from "react";

const TablePage = ({ row, handleVeriSil }) => {
  const { facility_id, year, fuel, amount, unit, co2, ch4, n2o, co2e } = row;

  return (
    <>
      <td>{facility_id}</td>
      <td>{year}</td>
      <td>{fuel}</td>
      <td>{amount}</td>
      <td>{unit}</td>
      <td>{co2}</td>
      <td>{ch4}</td>
      <td>{n2o}</td>
      <td>{co2e}</td>

      <td className="d-flex flex-column ">
        <button
          className="btn btn-info text-light mb-1"
          style={{ padding: ".2rem .5rem", fontSize: ".75rem" }}
          onClick={() => handleVeriSil(row.id)}
        >
          Sil
        </button>
        <button
          className="btn btn-info text-light mb-1"
          style={{ padding: ".2rem .5rem", fontSize: ".75rem" }}
        >
          Düzenle
        </button>
      </td>
      {/* <td className="text-center">
    <FiTrash2
      className="text-danger cursor-pointer fs-4"
      onClick={() => handleDelete(row.id)}
    />
  </td>
  <td className="text-center">
    <FiEdit
      className="text-info cursor-pointer fs-4"
      onClick={() =>
        handleEdit(row.id, row.name, row.phoneNumber, row.gender)
      }
    />
  </td> */}
    </>
  );
};

export default TablePage;
