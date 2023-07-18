import React from "react";

const Table = (props: any) => {
  return <div>{props.data}</div>;
};
export default Table;
// import {
//   createColumnHelper,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from "@tanstack/react-table";

// type Person = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   visits: number;
//   status: string;
//   progress: number;
// };
// const initState: Person[] = [
//   {
//     firstName: "",
//     lastName: "",
//     age: 0,
//     visits: 0,
//     status: "",
//     progress: 0,
//   },
// ];
// type TableProps = {
//   data: Person[];
// };
// const columnHelper: any = createColumnHelper<any>();

// const columns = [
//   columnHelper.accessor("firstName", {
//     cell: (info: any) => info.getValue(),
//     footer: (info: any) => info.column.id,
//   }),
//   columnHelper.accessor((row: any) => row.lastName, {
//     id: "lastName",
//     cell: (info: any) => <i>{info.getValue()}</i>,
//     header: () => <span>Last Name</span>,
//     footer: (info: any) => info.column.id,
//   }),
//   columnHelper.accessor("age", {
//     header: () => "Age",
//     cell: (info: any) => info.renderValue(),
//     footer: (info: any) => info.column.id,
//   }),
//   columnHelper.accessor("visits", {
//     header: () => <span>Visits</span>,
//     footer: (info: any) => info.column.id,
//   }),
//   columnHelper.accessor("status", {
//     header: "Status",
//     footer: (info: any) => info.column.id,
//   }),
//   columnHelper.accessor("progress", {
//     header: "Profile Progress",
//     footer: (info: any) => info.column.id,
//   }),
// ];

// const Table = (props: any) => {
//   console.log("table", props.data);

//   const table = useReactTable({
//     data: props.data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });
//   return (
//     <div className="p-2">
//       <table>
//         <thead>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <th key={header.id}>
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                         header.column.columnDef.header,
//                         header.getContext()
//                       )}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table?.getRowModel().rows.map((row) => (
//             <tr key={row.id}>
//               {row.getVisibleCells().map((cell) => (
//                 <td key={cell.id}>
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           {table?.getFooterGroups().map((footerGroup) => (
//             <tr key={footerGroup.id}>
//               {footerGroup.headers.map((header) => (
//                 <th key={header.id}>
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                         header.column.columnDef.footer,
//                         header.getContext()
//                       )}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </tfoot>
//       </table>
//     </div>
//   );
// };

// export default Table;
