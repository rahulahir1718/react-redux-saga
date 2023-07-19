import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, FormControl, InputLabel, MenuItem, Pagination, Select, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export interface IGridProps{
    gridData: any;
    totalCount: number;
}

const sortOrderAsc = 'asc';
const sortOrderDesc = 'desc';

const Grid : React.FC<{
    gridProps : IGridProps, 
    onChange: (sortBy: string, sortOrder: string, page: number, pageSize: number) => void
}> = (props) => {

    const[sortBy, setSortBy] = useState('');
    const[sortOrder, setSortOrder] = useState(sortOrderAsc);
    const[pageNo, setPageNo] = useState(1);
    const[pageSize, setPageSize] = useState(5);
    const gridData : any = props.gridProps.gridData;
    const totalCount = props.gridProps.totalCount;

    let indexOfLastItem = pageNo * pageSize;
    let indexOfFirstItem = (indexOfLastItem - pageSize) + 1;

    if(indexOfLastItem > totalCount){
        indexOfLastItem = totalCount;
    }

    let tableHeaders = gridData && gridData.length > 0 ? Object.keys(gridData[0]) : null;
    if(tableHeaders){
        tableHeaders = tableHeaders.filter((header:any)=>header.toLowerCase().indexOf('id')===-1);
    }

    const handleSortBy = (columnName:string, order: string) => {
        setSortBy(columnName);
        setSortOrder(order);
        setPageNo(1);
        props.onChange(columnName, order, 1, pageSize);
    };

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPageNo(value);
        props.onChange(sortBy, sortOrder, value, pageSize);
    };

    const handlePageSizeChange = (event: any) => {
        setPageSize(event.target.value);
        setPageNo(1);
        props.onChange(sortBy, sortOrder, 1, event.target.value);
    }

    return (
        <TableContainer component={Paper} sx={{width:'90%',height:'fit-content'}}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    {tableHeaders && tableHeaders.length > 0 && tableHeaders.map((header:string)=>
                        <TableCell>
                            <Box display='flex' alignItems='center'>
                                {
                                header.split(/(?=[A-Z])/).length === 2 ? 
                                    header.split(/(?=[A-Z])/)[0].charAt(0).toUpperCase() + header.split(/(?=[A-Z])/)[0].slice(1) + ' ' + header.split(/(?=[A-Z])/)[1] :
                                    header.charAt(0).toUpperCase() + header.slice(1)
                                }
                                {((sortBy === header && sortOrder == sortOrderDesc) || (!sortBy || sortBy!==header)) && <ArrowDropUpIcon onClick={()=>handleSortBy(header, sortOrderAsc)}/>}
                                {sortBy === header && sortOrder == sortOrderAsc && <ArrowDropDownIcon onClick={()=>handleSortBy(header, sortOrderDesc)}/>}
                            </Box>
                        </TableCell>
                    )}
                </TableRow>
                </TableHead>
                <TableBody>
                    {gridData && gridData.length > 0 && gridData.map((data:any) => (
                    <TableRow
                    key={data.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    {tableHeaders && tableHeaders.length > 0 && tableHeaders.map((header:string)=>
                         <TableCell >{data[header]}</TableCell>
                    )}
                </TableRow>
                   ))}
                </TableBody>
            </Table>
            <Box display='flex' alignItems='center' justifyContent='space-between' ml={2} mr={2} mt={3} mb={2}>
                <Box display='flex' alignItems='center' columnGap={1}>
                    <FormControl fullWidth>
                        <InputLabel id="page-size-label">Page</InputLabel>
                        <Select
                            labelId="page-size-label"
                            id="page-size"
                            value={pageSize}
                            label="Page Size"
                            onChange={handlePageSizeChange}
                        >
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography>per page</Typography>
                </Box>
                <Typography variant='h6'>Showing {indexOfFirstItem} to {indexOfLastItem} of total {totalCount} records</Typography>
                <Stack spacing={2}>
                    <Pagination count={Math.ceil(totalCount/pageSize)} page={pageNo} onChange={handlePageChange}/>
                </Stack>
            </Box>
        </TableContainer>
    );
};

export default Grid;