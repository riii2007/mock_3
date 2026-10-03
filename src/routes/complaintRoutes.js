const express = require('express');
const router = express.Router();

const{createComplaint,getAllComplaints,getComplaintById,updateComplaint,updateComplaintStatus,deleteComplaint}=require("../controller/complaintController");

router.get('/', createComplaint);
router.post('/', getAllComplaints);
router.get('/:id', getComplaintById);
router.put('/', updateComplaint);
router.put('/', updateComplaintStatus);
router.delete('/',deleteComplaint);


module.exports = router;