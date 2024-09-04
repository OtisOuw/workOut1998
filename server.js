const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const { Cipher } = require('crypto');

const app = express();
const PORT = 3000;

// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


// Session management middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

// Middleware to protect routes
app.use((req, res, next) => {
  // Allow API routes and the login page to bypass authentication
  if (req.path.startsWith('/api/') || req.path === '/login' || req.path === '/public') {
    return next();
  }
  
  // Check if the user is authenticated
  if (req.session.loggedIn) {
    return next();
  }
  
  // Redirect to login page if not authenticated
  res.redirect('/login');
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for login page
app.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    return res.redirect('/home.html');
  }
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Handle login
app.post('/login', (req, res) => {
  const { password } = req.body;
  if (password === 'a') {
    req.session.loggedIn = true;
    return res.redirect('/home.html');
  }
  res.redirect('/login');
});



app.get('/', (req, res) => {
    res.redirect('/login');
  });



app.use(cors({
    origin: 'https://www.ppllog.xyz', // Allow this origin
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 204 // For older browsers that might not handle 204 correctly
}));






function lastNumberCounter(filePath) {
    try {
        // Read the file content
        const data = fs.readFileSync(filePath, 'utf8');
        // Convert the file content to a number
        const number = parseInt(data.trim(), 10); // Trim any whitespace and convert to an integer
        if (isNaN(number)) {
            throw new Error('The file content is not a valid number');
        }
        return number;
    } catch (error) {
        console.error('Error reading file:', error);
        return null; // Return null if there's an error
    }
}

function readLastNumber(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const lines = data.trim().split('\n');
        const lastLine = lines[lines.length - 1].trim();
        return parseFloat(lastLine);
    } catch (error) {
        console.log(filePath)
        console.error(`Error reading file ${filePath}:`, error);
        return 'Error'; // Return a placeholder or an error message
    }
}










app.get('/api/legsCount', (req, res) => {
    const filePath = path.join(__dirname, 'pplCount/legsCount.txt');
    const value = lastNumberCounter(filePath);
    if (value !== null) {
        res.json({ value });
    } else {
        res.status(500).json({ error: 'Failed to read the number from the file' });
    }
});

app.get('/api/pushCount', (req, res) => {
    const filePath = path.join(__dirname, 'pplCount/pushCount.txt');
    const value = lastNumberCounter(filePath);
    if (value !== null) {
        res.json({ value });
    } else {
        res.status(500).json({ error: 'Failed to read the number from the file' });
    }
});

app.get('/api/pullCount', (req, res) => {
    const filePath = path.join(__dirname, 'pplCount/pullCount.txt');
    const value = lastNumberCounter(filePath);
    if (value !== null) {
        res.json({ value });
    } else {
        res.status(500).json({ error: 'Failed to read the number from the file' });
    }
});

app.get('/api/absCount', (req, res) => {
    const filePath = path.join(__dirname, 'pplCount/absCount.txt');
    const value = lastNumberCounter(filePath);
    if (value !== null) {
        res.json({ value });
    } else {
        res.status(500).json({ error: 'Failed to read the number from the file' });
    }
});



// START OF LEGS
app.get('/api/Bsq', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Legs/Bsq_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/Dl', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Legs/DL_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/BHT', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Legs/BHT_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/DWL', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Legs/DWL_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/LE', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Legs/LE_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/SLC', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Legs/SLC_values.txt');
    res.json({ value: readLastNumber(filePath) });
}); 

app.get('/api/FQ', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Legs/FQ_values.txt');
    res.json({ value: readLastNumber(filePath) });
}); 

app.get('/api/SLP', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Legs/SLP_values.txt');
    res.json({ value: readLastNumber(filePath) });
}); 

app.get('/api/SLLE', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Legs/SLLE_values.txt');
    res.json({ value: readLastNumber(filePath) });
}); 

app.get('/api/SLLC', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Legs/SLLC_values.txt');
    res.json({ value: readLastNumber(filePath) });
}); 
// END OF LEGS 
// START OF PUSH

app.get('/api/BP', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Push/BP_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/DSP', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Push/DSP_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/WD', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Push/WD_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/LTHCF', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Push/LTHCF_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/DISC', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Push/DISC_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/DLR', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Push/DLR_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/CBP', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Push/CBP_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/OP', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Push/OP_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/DIP', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Push/DIP_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/PD', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Push/PD_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/CLR', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Push/CLR_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/CTK', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Push/CTK_values.txt');
    res.json({ value: readLastNumber(filePath) });
}); // END OF PUSH

// START OF PULL

app.get('/api/LP', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/lat_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/PU', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/PU_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/PR', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/PR_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/MHR', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/MHR_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/SFP', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/SFP_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/RGEBC', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/RGEBC_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/SGEBC', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/SGEBC_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/CSEOR', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/CSEOR_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/CSR', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/CSR_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/KSACPO', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/KSACPO_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/SGBS', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/SGBS_values.txt');
    res.json({ value: readLastNumber(filePath) });
});


app.get('/api/CRF', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/CRF_values.txt');
    res.json({ value: readLastNumber(filePath) });
});


app.get('/api/SACC', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/SACC_values.txt');
    res.json({ value: readLastNumber(filePath) });
});


app.get('/api/HamC', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/HamC_values.txt');
    res.json({ value: readLastNumber(filePath) });
});


app.get('/api/NGP', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/NGP_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/TBSQ', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Legs/TBSQ_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/RBDH', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Legs/RBDH_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/SMRL', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Legs/SMRL_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/LLC', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Legs/LLC_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/MHA', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Legs/MHA_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/PBHT', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Legs/PBHT_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/SGS', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Legs/SGS_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/CRP', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/CRP_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/DOAR', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/DOAR_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/CSTR', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/CSTR_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/RUR', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/RUR_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/DSC', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/DSC_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/SPIDERC', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/SPIDERC_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/SealR', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/SealR_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/RPD', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/RPD_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/DPC', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/DPC_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/DHC', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/DHC_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/DumbSupCurl', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/DumbSupCurl_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/SAP', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/SAP_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/AP', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/AP_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/BFSC', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/BFSC_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/ELR', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/ELR_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/ROTE', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/ROTE_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/HLR', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Pull/HLR_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/SED', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Push/SED_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/TVP', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Push/TVP_values.txt');
    res.json({ value: readLastNumber(filePath) });
});

app.get('/api/MLR', (req, res) => {
    const filePath = path.join(__dirname, 'weightValues/Push/MLR_values.txt');
    res.json({ value: readLastNumber(filePath) });
});


// Route to handle saving data
app.post('/api/save-data', (req, res) => {
    const { text, identifier } = req.body; 
    const data2 = { text, identifier};
    console.log(data2);
    console.log('Text ' + text + ' ' + 'ID ' + identifier)
    
    if (identifier.startsWith('Bsq')) { // START OF LEGS 1 BLOCK 1
         fileName = 'weightValues/Legs/Bsq_values.txt'
    } else if (identifier.startsWith('DL')) {
         fileName = 'weightValues/Legs/DL_values.txt'
    } else if (identifier.startsWith('BHT')) {
        fileName = 'weightValues/Legs/BHT_values.txt'
    } else if (identifier.startsWith('DWL')) {
        fileName = 'weightValues/Legs/DWL_values.txt'
    } else if (identifier.startsWith('LE')) {
        fileName = 'weightValues/Legs/LE_values.txt'
    } else if (identifier.startsWith('SLC')) {
        fileName = 'weightValues/Legs/SLC_values.txt' // END OF LEGS 1 BLOCK 1
    } else if (identifier.startsWith('Bench')) {
        fileName = 'weightValues/Push/BP_values.txt'
    } else if (identifier.startsWith('DSP')) {
        fileName = 'weightValues/Push/DSP_values.txt'
    } else if (identifier.startsWith('WD')) {
        fileName =  'weightValues/Push/WD_values.txt'
    } else if (identifier.startsWith('LTHCF')) {
        fileName =  'weightValues/Push/LTHCF_values.txt'
    } else if (identifier.startsWith('DISC')) {
        fileName =  'weightValues/Push/DISC_values.txt'
    } else if (identifier.startsWith('DumbLR')) {
        fileName =  'weightValues/Push/DLR_values.txt'
    } else if (identifier.startsWith('CBP')) {
        fileName =  'weightValues/Push/CBP_values.txt'
    } else if (identifier.startsWith('OP')) {
        fileName =  'weightValues/Push/OP_values.txt'
    } else if (identifier.startsWith('DIP')) {
        fileName =  'weightValues/Push/DIP_values.txt'
    } else if (identifier.startsWith('PD')) {
        fileName =  'weightValues/Push/PD_values.txt'
    } else if (identifier.startsWith('CLR')) {
        fileName =  'weightValues/Push/CLR_values.txt'
    } else if (identifier.startsWith('CTK')) {
        fileName =  'weightValues/Push/CTK_values.txt'
    } else if (identifier.startsWith('LP')) { // PULL 1
        fileName =  'weightValues/Pull/lat_values.txt'
    } else if (identifier.startsWith('PU')) {
        fileName =  'weightValues/Pull/PU_values.txt'
    } else if (identifier.startsWith('PR')) {
        fileName =  'weightValues/Pull/PR_values.txt'
    } else if (identifier.startsWith('MHR')) {
        fileName =  'weightValues/Pull/MHR_values.txt'
    } else if (identifier.startsWith('SFP')) {
        fileName =  'weightValues/Pull/SFP_values.txt'
    } else if (identifier.startsWith('RGEBC')) {
        fileName =  'weightValues/Pull/RGEBC_values.txt'
    } else if (identifier.startsWith('SGEBC')) {
        fileName =  'weightValues/Pull/SGEBC_values.txt'
    } else if (identifier.startsWith('NGP')) {
        fileName =  'weightValues/Pull/NGP_values.txt'
    } else if (identifier.startsWith('CSEOR')) {
        fileName =  'weightValues/Pull/CSEOR_values.txt'
    } else if (identifier.startsWith('CSR')) {
        fileName =  'weightValues/Pull/CSR_values.txt'
    } else if (identifier.startsWith('KSACPO')) {
        fileName =  'weightValues/Pull/KSACPO_values.txt'
    } else if (identifier.startsWith('SGBS')) {
        fileName =  'weightValues/Pull/SGBS_values.txt'
    } else if (identifier.startsWith('CRF')) {
        fileName =  'weightValues/Pull/CRF_values.txt'
    } else if (identifier.startsWith('SACC')) {
        fileName =  'weightValues/Pull/SACC_values.txt'
    } else if (identifier.startsWith('HamC')) {
        fileName =  'weightValues/Pull/HamC_values.txt'
    } else if (identifier.startsWith('FQ')) {
        fileName =  'weightValues/Legs/FQ_values.txt'
    } else if (identifier.startsWith('SLP')) {
        fileName =  'weightValues/Legs/SLP_values.txt'
    } else if (identifier.startsWith('SLLE')) {
        fileName =  'weightValues/Legs/SLLE_values.txt'
    } else if (identifier.startsWith('SLLC')) {
        fileName =  'weightValues/Legs/SLLC_values.txt'
    } else if (identifier.startsWith('TBSQ')) {
        fileName =  'weightValues/Legs/TBSQ_values.txt'
    } else if (identifier.startsWith('RBDH')) {
        fileName =  'weightValues/Legs/RBDH_values.txt'
    } else if (identifier.startsWith('SMRL')) {
        fileName =  'weightValues/Legs/SMRL_values.txt'
    } else if (identifier.startsWith('LLC')) {
        fileName =  'weightValues/Legs/LLC_values.txt'
    } else if (identifier.startsWith('MHA')) {
        fileName =  'weightValues/Legs/MHA_values.txt'
    } else if (identifier.startsWith('PBHT')) {
        fileName =  'weightValues/Legs/PBHT_values.txt'
    } else if (identifier.startsWith('SGS')) {
        fileName =  'weightValues/Legs/SGS_values.txt'
    } else if (identifier.startsWith('CRP')) {
        fileName =  'weightValues/Pull/CRP_values.txt'
    } else if (identifier.startsWith('DOAR')) {
        fileName =  'weightValues/Pull/DOAR_values.txt'
    } else if (identifier.startsWith('CSTR')) {
        fileName =  'weightValues/Pull/CSTR_values.txt'
    } else if (identifier.startsWith('RUR')) {
        fileName =  'weightValues/Pull/RUR_values.txt'
    } else if (identifier.startsWith('DSC')) {
        fileName =  'weightValues/Pull/DSC_values.txt'
    } else if (identifier.startsWith('SPIDERC')) {
        fileName =  'weightValues/Pull/SPIDERC_values.txt'
    } else if (identifier.startsWith('SealR')) {
        fileName =  'weightValues/Pull/SealR_values.txt' 
    } else if (identifier.startsWith('RPD')) {
        fileName =  'weightValues/Pull/RPD_values.txt'
    } else if (identifier.startsWith('DPC')) {
        fileName =  'weightValues/Pull/DPC_values.txt'
    } else if (identifier.startsWith('DHC')) {
        fileName =  'weightValues/Pull/DHC_values.txt'
    } else if (identifier.startsWith('DumbSupCurl')) {
        fileName =  'weightValues/Pull/DumbSupCurl_values.txt'
    } else if (identifier.startsWith('SAP')) {
        fileName =  'weightValues/Pull/SAP_values.txt'
    } else if (identifier.startsWith('AP')) {
        fileName =  'weightValues/Pull/AP_values.txt'
    } else if (identifier.startsWith('BFSC')) {
        fileName =  'weightValues/Pull/BFSC_values.txt'
    } else if (identifier.startsWith('ELR')) {
        fileName =  'weightValues/Pull/ELR_values.txt'
    } else if (identifier.startsWith('ROTE')) {
        fileName =  'weightValues/Pull/ROTE_values.txt'
    } else if (identifier.startsWith('HLR')) {
        fileName =  'weightValues/Pull/HLR_values.txt'
    } else if (identifier.startsWith('SED')) {
        fileName =  'weightValues/Push/SED_values.txt'
    } else if (identifier.startsWith('TVP')) {
        fileName =  'weightValues/Push/TVP_values.txt'
    } else if (identifier.startsWith('MLR')) {
        fileName =  'weightValues/Push/MLR_values.txt'
    } else if (identifier.startsWith('Push')) {
        fileName = 'pplCount/pushCount.txt'
        stringCount = text.toString()
        fs.writeFile(fileName, stringCount, (err) => {
            if (err) {
                console.log('Test')
                //return res.status(500).json({ error: 'Failed to save data' });
            }
            //console.log('Yippiee' + fileName);
        })

        return;
    } else if (identifier.startsWith('Pull')) {
        fileName = 'pplCount/pullCount.txt'
        stringCount = text.toString()
        fs.writeFile(fileName, stringCount, (err) => {
            if (err) {
                console.log('Test')
                //return res.status(500).json({ error: 'Failed to save data' });
            }
            //console.log('Yippiee' + fileName);
        })

        return;
    } else if (identifier.startsWith('Legs')) {
        fileName = 'pplCount/legsCount.txt'
        stringCount = text.toString()
        fs.writeFile(fileName, stringCount, (err) => {
            if (err) {
                console.log('Test')
                //return res.status(500).json({ error: 'Failed to save data' });
            }
            //console.log('Yippiee' + fileName);
        })
        return;
    } else if (identifier.startsWith('Abs')) {
        fileName = 'pplCount/absCount.txt'
        stringCount = text.toString()
        fs.writeFile(fileName, stringCount, (err) => {
            if (err) {
                console.log('Test')
                //return res.status(500).json({ error: 'Failed to save data' });
            }
            //console.log('Yippiee' + fileName);
        })
        return;
    } else {
        fileName = 'trash.txt'
    }
    




    // Save the received text to a file
    fs.appendFile(fileName, '\n' + text, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            console.log('Data not fine')
            //return res.status(500).json({ error: 'Failed to save data' });
        }
        //console.log(identifier + ' ' + text + ' ' + fileName)
        console.log('Data Fine')
        //res.status(200).json({ message: 'Data saved successfully' });
    });
});































app.post('/save-count', (req, res) => { 
    const { name, count} = req.body;
    //Legs = 1 Push = 2 Pull = 3 Abs = 4 Cardio = 5

    if (name === 1) {
        fileNaam = 'pplCount/legsCount.txt'
    } else if (name === 2) {
        fileNaam = 'pplCount/pushCount.txt'
    } else if (name === 3) {
        fileNaam = 'pplCount/pullCount.txt'
    } else if (name === 4) {
        fileNaam = 'pplCount/absCount.txt'
    } else {
        console.log('Whoops couldnt find right file to save count in')
        fileNaam = 'pplCount/trash.txt'
    }

    
    stringCount = count.toString()
    fs.writeFile(fileNaam, stringCount, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return res.status(500).json({ error: 'Failed to save data' });
        }
        res.status(200).json({ message: 'Data saved successfully' });
    })
    


   
});






















// Catch-all route for other requests
app.get('*', (req, res) => {
    if (req.session.loggedIn) {
      res.sendFile(path.join(__dirname, 'public', 'home.html'));
    } else {
      res.redirect('/login');
    }
  });



  
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });





