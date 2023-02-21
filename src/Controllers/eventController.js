const eventModel = require("../Models/eventModel")
const { isValid, isValidName, isvalidEmail, isValidPassword, keyValid } = require('../Validator/validation')


const createEvent = async function (req, res) {
    try {
        const data = req.body
       
        if (!keyValid(data)) return res.status(400).send({ status: false, message: "Please Enter data to Create the Event" })
       

        const { name, description, start_time, end_time, day_of_week } = data;

        if (!isValid(name)) return res.status(400).send({ status: false, message: "fname is mandatory and should have non empty String" })

        if (!isValidName.test(fname)) return res.status(400).send({ status: false, message: "Please Provide fname in valid formate and Should Starts with Capital Letter" })

        if (!isValid(description)) return res.status(400).send({ status: false, message: "lname is mandatory and should have non empty String" })

        if (!isValid(start_time)) return res.status(400).send({ status: false, message: "email is mandatory and should have non empty String" })

        if (!isValid(end_time)) return res.status(400).send({ status: false, message: "email is mandatory and should have non empty String" })


        if (!isvalidEmail.test(email)) return res.status(400).send({ status: false, message: "email should be in  valid Formate" })

        

        if (!isValid(day_of_week )) return res.status(400).send({ status: false, message: "Password is mandatory and should have non empty String" })

        if (!isValidPassword(password)) return res.status(400).send({ status: false, message: "please provide Valid password with 1st letter should be Capital letter and contains spcial character with Min length 8 and Max length 15" })

       

        

        const event = await eventModel.create(data)

        // const event = new Event({
        //     name,
        //     description,
        //     start_time,
        //     end_time,
        //     day_of_week,
        //     });
            
            
            
            // Generate the recurring dates for the next 90 days
            const now = moment();
            const end_date = moment().add(90, 'days');
            const recurring_dates = [];
            
            while (now.isBefore(end_date)) {
            if (now.day() === day_of_week) {
            const date = now.clone().startOf('day').add(start_time.getHours(), 'hours').add(start_time.getMinutes(), 'minutes').toDate();
            recurring_dates.push(date);
            }
            now.add(1, 'days');
            }
            
            // Update the event with the recurring dates
            await Event.findByIdAndUpdate(event._id, { recurring_dates });


        return res.status(201).send({ status: true, message: "User created successfully", data: event })

    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}