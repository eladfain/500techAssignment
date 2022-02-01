import React from "react";

const Grid = ({ config, data }) => {
  const tHead = config.map((entry) => <th key={entry.title}>{entry.title}</th>);
  const tBody = data.map((row, index) => (
    <tr key={"row" + row[config[0].title] + index}>
      {config.map((entry) => (
        <td key={"cell" + row[entry.field] + index}>
          {entry.component ? (
            <entry.component data={row[entry.field]} />
          ) : (
            row[entry.field]
          )}
        </td>
      ))}
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>{tHead}</tr>
      </thead>
      <tbody>{tBody}</tbody>
    </table>
  );
};

export default Grid;
