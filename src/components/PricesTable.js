import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles(theme => ({
  root: {
    width: "60%",
    marginTop: theme.spacing(3)
  },
  table: {},
  head: {
    fontWeight: 'bold',
  }
}))

const rows = [
  { type: "1 layer", price: "55" },
  { type: "Wedding 3 layer", price: "350" },
  { type: "Wedding 4 layer", price: "400" }
]

function SimpleTable() {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell><b>Type of Cake</b></TableCell>
            <TableCell align="right"><b>Price (£)</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.type}>
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default SimpleTable
