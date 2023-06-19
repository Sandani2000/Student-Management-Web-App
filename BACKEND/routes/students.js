const router = require("express").Router();
let Student = require("../models/Student");

// --------- Adding a student ----------
router.route("/add").post((req,res) =>{     //http://localhost:8030/student/add
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })

    // js then = java if
    newStudent.save().then(() => {
        res.json("Student Added")
    }).catch((err) => {
        console.log(err);
    })
})

// ---------- Viewg all student -----------
router.route("/").get((req,res) => {    //http://localhost:8060/student/
    Student.find().then((students) => {
        res.json(students)
    }).catch((err) => {
        console.log(err)
    })
})

// --------- Update a student ---------- 
router.route("/update/:sid").put(async(req,res) => {    //http://localhost:8060/student/update/it21454882
    let userId = req.params.sid;

    // const name = req.body.name;
    // const age = Number(req.body.age);
    // const gender = req.body.gender;
    const {name, age, gender} = req.body;    //using destructure method

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(() => {
        res.status(200).send({status: "user updated"});    //user: update   send update user to frontend
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message()});
    })
})


// --------- Delete a student ---------- 
router.route("/delete/:sid").delete(async(req,res) => {
    let userId = req.params.sid;

    await Student.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
        //500 internal error?
    })
})


// --------- Get data from only one student---------- 
router.route("/get/:sid").get(async(req,res) => {
    let userId = req.params.sid;

    const user = await Student.findById(userId).then((student) => {
        res.status(200).send({status: "User successfuly fetched", user: student});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

module.exports = router;
