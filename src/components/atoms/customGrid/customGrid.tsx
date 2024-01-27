import React from 'react'
import { Box, Table, TableBody,
TableCell, TableContainer, TableHead,
TableRow, Paper } from '@mui/material';
import style from './CustomGrid.module.scss'

const CustomGrid = (props: any) => {

  return (
    <Box className={style.customGrid}>
      <TableContainer  component={Paper}>
        <Table
          className={style.customGrid__table}
        >
          <TableHead className={style.customGrid__head}>
            <TableRow>
              <TableCell className={style.customGrid__head_cells}>Gambler</TableCell>
              <TableCell className={style.customGrid__head_cells}>BetValue</TableCell>
              <TableCell className={style.customGrid__head_cells}>BetAmount</TableCell>
              <TableCell className={style.customGrid__head_cells}>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { props.players && props.players.map((player: any) =>  
              <TableRow>
                <TableCell className={style.customGrid__row_cells}>{player.gambler}</TableCell>
                <TableCell className={style.customGrid__row_cells}>{player.betValue}</TableCell>
                <TableCell className={style.customGrid__row_cells}>{player.betAmount}</TableCell>
                <TableCell className={style.customGrid__row_cells}>{player.address}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default CustomGrid;
