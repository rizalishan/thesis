import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createConnection, getRepository } from 'typeorm';
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { Employee } from '../../entities/Employee';
import ConnectionObject from '../../utils/connectionObject';


export default function CreateEmployee(props: any) {
  const navigate = useNavigate();
  useEffect(() => {
    createConnection(ConnectionObject).catch(console.error)
  }, [])


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const employee = new Employee();
    employee.first_name = data.get('first_name')!.toString();
    employee.last_name = data.get('last_name')!.toString();
    employee.cnic = data.get('cnic')!.toString();
    employee.dob = data.get('dob')!.toString();
    employee.current_address = data.get('current_address')!.toString();
    employee.permanent_address = data.get('permanent_address')!.toString();
    employee.father_name = data.get('father_name')!.toString();
    employee.gender = data.get('gender')!.toString();
    employee.domicile = data.get('domicile')!.toString();
    employee.designation = data.get('designation')!.toString();
    employee.date_of_joining = data.get('date_of_joining')!.toString();
    employee.employment_status = data.get('employment_status')!.toString();
    employee.remarks = data.get('remarks')!.toString();
    console.log(data.get('remarks'), data.get('salary'))
    employee.salary = data.get('salary')!.toString();
    getRepository(Employee).save(employee);
    props.onComplete();
  };

  return (
    <Modal
      open={props.visible}
      onClose={() => props.setVisible(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ width: '75%', left: '12.5%', top: '10%', height: '80%' }}
    >
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%', overflow: 'auto' }}>
        <Box>
          <Box display="flex" id="modal-modal-title">
            <Typography flex="1" variant="h6" component="h2">
              Create Employee
            </Typography>
            <IconButton
              onClick={() => props.setVisible(false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            id="modal-modal-description"
          >
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="first_name"
                    required
                    fullWidth
                    id="first_name"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="last_name"
                    label="Last Name"
                    name="last_name"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="father_name"
                    label="Father Name"
                    name="father_name"
                    autoComplete="father-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="cnic"
                    label="CNIC"
                    name="cnic"
                    autoComplete="cnic"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="dob"
                    label="Date of Birth"
                    name="dob"
                    autoComplete="dob"
                    type="date"
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    required
                    fullWidth
                    id="current_address"
                    label="Current Address"
                    name="current_address"
                    autoComplete="current_address"
                    multiline
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    required
                    fullWidth
                    id="permanent_address"
                    label="Permanent Address"
                    name="permanent_address"
                    autoComplete="permanent_address"
                    multiline
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="gender"
                    label="Gender"
                    name="gender"
                    autoComplete="gender"
                    select
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="domicile"
                    label="Domicile"
                    name="domicile"
                    autoComplete="domicile"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="designation"
                    label="Designation"
                    name="designation"
                    autoComplete="designation"

                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="salary"
                    label="Salary"
                    name="salary"
                    autoComplete="salary"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="dob"
                    label="Date of Joining"
                    name="date_of_joining"
                    autoComplete="date_of_joining"
                    type="date"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="employment_status"
                    label="Status"
                    name="employment_status"
                    autoComplete="employment_status"
                    select
                  >
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Retired">Retired</MenuItem>
                    <MenuItem value="Fired">Fired</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12} >
                  <TextField
                    required
                    fullWidth
                    id="remarks"
                    label="Remarks"
                    name="remarks"
                    autoComplete="remarks"
                    multiline
                  />
                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save Employee
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Modal>
  );
}