import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { sendAsync } from '../../message-control/renderer';
import CreateEmployee from './CreateEmployee';

const columns = [
  { id: 'first_name', label: 'First Name', minWidth: 170 },
  { id: 'last_name', label: 'Last Name', minWidth: 100 },
  {
    id: 'email',
    label: 'Email',
  },
  {
    id: 'cnic',
    label: 'CNIC',
  },
  {
    id: 'date_of_joining',
    label: 'Joining Date',
  }
];

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(0);
  const [openDeleteSuccess, setOpenDeleteSuccess] = useState(false);


  const loadEmployees = () => {
    setTimeout(() => {

      sendAsync(`SELECT * FROM employees`).then((result: any[]) => {
        const r: any[] = [];
        for (var employee of result) {
          r.push(employee)
        }
        setRows(r)

      }).catch(() => {
        setOpen(true)
      });
    }, 1000);
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    loadEmployees();
  }, [])

  const handleComplete = () => {
    setOpenSuccess(true);
    setVisible(false);
    loadEmployees();
  }

  const handleDeleteAlert = (eid: number) => {
    setShowAlert(eid);
  }

  const handleDelete = () => {
    sendAsync(`DELETE FROM employees WHERE employee_id=${showAlert}`).then((result: any[]) => {
      loadEmployees();
      setOpenDeleteSuccess(true);
      setShowAlert(0);
    }).catch(() => {
      setOpen(true)
    });
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Unexpected error occured"
      />
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={() => setOpenSuccess(false)}
        message="Employee Created Successfully."
      />
      <Snackbar
        open={openDeleteSuccess}
        autoHideDuration={6000}
        onClose={() => setOpenDeleteSuccess(false)}
        message="Employee Deleted Successfully."
      />
      <Box display="flex" flexDirection="column">
        <Box display="flex" justifyContent="flex-end">
          <Button onClick={() => setVisible(true)}>Create Employee</Button>
        </Box>
        <Box>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                  <TableCell

                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: any) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} >
                              {value}
                            </TableCell>
                          );
                        })}
                        <TableCell>
                          <IconButton onClick={() => handleDeleteAlert(row.employee_id)} color="error">
                            <CloseIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Box>
      <CreateEmployee visible={visible} setVisible={setVisible} onComplete={handleComplete} />
      <Dialog
        open={showAlert > 0}
        onClose={() => setShowAlert(0)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent id="alert-dialog-title">
          {"Are you sure you want to delete this employee?"}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowAlert(0)}>NO</Button>
          <Button onClick={handleDelete} autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}