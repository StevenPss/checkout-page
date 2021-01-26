import { FormControl, InputAdornment, TextField } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import React from 'react'

function ContactInformation() {
    return (
        <div className="flex flex-col">
            <h3 className="font-bold md:text-xl text-lg mt-10 md:mt-0 mb-5">Contact information</h3>
            
            <FormControl>
                <TextField
                    required
                    id="input-with-icon-email"
                    label="Email"
                    style={{marginBottom: '20px'}}
                    variant="outlined"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailIcon className="text-gray-500"/>
                        </InputAdornment>
                    ),
                    }}
                />

                <TextField
                    required
                    id="input-with-icon-phone"
                    label="Phone"
                    style={{marginBottom: '20px'}}
                    variant="outlined"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PhoneIcon className="text-gray-500"/>
                        </InputAdornment>
                    ),
                    }}
                />
            </FormControl>

        </div>
    )
}

export default ContactInformation