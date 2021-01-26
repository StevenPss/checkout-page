import React, { useState } from 'react'
import { FormControl, InputAdornment, InputLabel, ListItemIcon, ListItemText, MenuItem, TextField, Select, Checkbox, Button } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';

function ShippingAddress() {
    const [country, setCountry] = useState('');
    const [checked, setChecked] = useState(false);

    const handleSelectChange = (e) => {
        setCountry(e.target.value);
    }

    const handleCheckBoxChange = (e) => {
        setChecked(e.target.checked);
    }

    return (
        <div className="flex flex-col">
            <h3 className="font-bold md:text-xl text-lg mt-10 mb-5">Shipping address</h3>
            
            <FormControl>
                <TextField
                    required
                    id="input-with-icon-fullname"
                    label="Full name"
                    style={{marginBottom: '20px'}}
                    variant="outlined"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircleIcon className="text-gray-500"/>
                        </InputAdornment>
                    ),
                    }}
                />
            </FormControl>

            <FormControl>
                <TextField
                    required
                    id="input-with-icon-address"
                    label="Address"
                    style={{marginBottom: '20px'}}
                    variant="outlined"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <HomeIcon className="text-gray-500"/>
                        </InputAdornment>
                    ),
                    }}
                />
            </FormControl>

            <FormControl>
                <TextField
                    required
                    id="input-with-icon-city"
                    label="City"
                    style={{marginBottom: '20px'}}
                    variant="outlined"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LocationCityIcon className="text-gray-500"/>
                        </InputAdornment>
                    ),
                    }}
                />
            </FormControl>

            <div className="flex justify-between">
                <FormControl variant="outlined" className="w-40">
                    <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={country}
                        onChange={handleSelectChange}
                        label="Country"
                        >
                        <MenuItem value="">
                            <ListItemIcon>
                                <LocationCityIcon />
                            </ListItemIcon>
                        <ListItemText primary="Country" />
                        </MenuItem>
                        <MenuItem value="ZA">South Africa</MenuItem>
                        <MenuItem value="JP">Japan</MenuItem>
                        <MenuItem value="AU">Australia</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className="w-40">
                    <TextField
                        required
                        id="input-with-icon-postal-code"
                        label="Postal Code"
                        variant="outlined"
                        style={{marginLeft: '20px'}}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MarkunreadMailboxIcon className="text-gray-500"/>
                            </InputAdornment>
                        ),
                        }}
                    />
                </FormControl>
            </div>
            <div className="mt-2">
                <Checkbox
                    checked={checked}
                    onChange={handleCheckBoxChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <p className="text-xs font-bold inline-block">Save this information for next time?</p>
            </div>

            <div className="flex flex-row-reverse mb-20">
                <Button
                variant="contained"
                color="primary"
                >
                    Continue
                </Button>
            </div>
        </div>
    )
}

export default ShippingAddress