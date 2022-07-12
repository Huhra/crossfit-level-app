
type req = {
    men: string,
    woman?: string,
    isChecked?: boolean
}

type columnReq = {
    name: string,
    needed: number,
    requisites: req[]
}

export let requisite: columnReq[] = [
    {
        name: "Crossfiter",
        needed: 12,
        requisites: [
                { men: 'Squat 33%BW', isChecked: false },
                { men: 'Deadlift' },
                { men: 'Bench press' },
                { men: 'Clean & Presses' },
                { men: 'Snatch' },
                { men: '10 squats in 20sec' },
                { men: '1 pull-up', woman: '5 banded pull-up' },
                { men: '10 push-up', woman: '1 push-up' },
                { men: '400m run in 2:20', woman: '400m run in 2:30' },
                { men: '1mile run in 10:00', woman: '1mile run in 11:20' },
                { men: '500m row in 2:10', woman: '500m row in 2:30' },
                { men: '1k row in 5:00', woman: '1k row in 5:30' },
                { men: '50 single under UB' },
                { men: 'Jackie (assisted) 35kg in 12:30', woman: 'Jackie (assisted) 15kg in 14:00' },
                { men: 'Randy 55 in 7:00', woman: 'Randy 35 in 8:00' }
            ]},
    {
        name: "Steer",
        needed: 12,
        requisites: [
                { men: 'Back Squat 80%BW', woman: '', isChecked: false },
                { men: 'Deadlift 80%BW' },
                { men: 'Bench Press 50%BW' },
                { men: 'Clean & Jerk 50%BW' },
                { men: 'Snatch 30%BW' },
                { men: '15 squats in 20sec' },
                { men: '7 pull-up', woman: '1 pull-up' },
                { men: '3 bar dip', woman: '1 bar dip' },
                { men: '400m run in 2:00', woman: '400m run in 2:10' },
                { men: '1mile run in 9:00', woman: '1mile run in 9:50' },
                { men: '500m row in 2:00', woman: '500m row in 2:20' },
                { men: '1k row in 4:30', woman: '1k row in 5:10' },
                { men: '75 single under UB' },
                { men: 'Jackie in 12:30', woman: 'Jackie in 14:00' },
                { men: 'Randy in 7:00', woman: 'Randy in 8:00' }
            ]},
    {
        name: "Competitor",
        needed: 12,
        requisites: [
                { men: 'Back Squat 120%BW', woman: '', isChecked: false },
                { men: 'Deadlift 130%BW' },
                { men: 'Bench Press 80%BW', woman: 'Bench Press 70%BW' },
                { men: 'Clean & Jerk 80%BW', woman: 'Clean & Jerk 70%BW' },
                { men: 'Snatch 50%BW' },
                { men: 'Pistol 1/leg' },
                { men: '7 chest to bar', woman: '7 pull-up' },
                { men: '3 ring dip', woman: '3 bar dip' },
                { men: '400m run in 1:40', woman: '400m run in 1:50' },
                { men: '1mile run in 8:00', woman: '1mile run in 8:45' },
                { men: '500m row in 1:50', woman: '500m row in 2:05' },
                { men: '1k row in 3:55', woman: '1k row in 4:30' },
                { men: '5 double under UB' },
                { men: 'Jackie in 11:00', woman: 'Jackie in 12:30' },
                { men: 'Randy in 6:00', woman: 'Randy in 7:00' }
            ]},
        {
            name: "Bull",
            needed: 11,
            requisites: [
                    { men: 'Back Squat 140%BW', woman: '', isChecked: false },
                    { men: 'Deadlift 170%BW' },
                    { men: 'Bench Press 110%BW', woman: 'Bench Press 80%BW' },
                    { men: 'Clean & Jerk 110%BW', woman: 'Clean & Jerk 90%BW' },
                    { men: 'Snatch 70%BW' },
                    { men: 'Pistol 5/leg' },
                    { men: '1 muscle up', woman: '5 chest to bar' },
                    { men: '5 HSPU', woman: '1 ring dip' },
                    { men: '400m run in 1:30', woman: '400m run in 1:40' },
                    { men: '1mile run in 7:20', woman: '1mile run in 8:00' },
                    { men: '500m row in 1:45', woman: '500m row in 2:00' },
                    { men: '2k row in 8:00', woman: '2k row in 9:00' },
                    { men: '15 double under UB' },
                    { men: 'Fran in 7:00', woman: 'Fran in 8:30' },
                    { men: 'Grace in 10:00', woman: 'Grace in 12:00' }
                ],
        },
        {
            name: "Elite",
            needed: 11,
            requisites: [
                { men: 'Back Squat 160%BW', woman: 'Back Squat 150%BW', isChecked: false },
                { men: 'Deadlift 210%BW', woman: 'Deadlift 200%BW' },
                { men: 'Bench Press 130%BW', woman: 'Bench Press 90%BW' },
                { men: 'Clean & Jerk 130%BW', woman: 'Clean & Jerk 100%BW' },
                { men: 'Snatch 90%BW', woman: 'Snatch 80%BW' },
                { men: 'Pistol 10/leg' },
                { men: '3 muscle up', woman: '1 muscle up' },
                { men: '10 HSPU', woman: '5 HSPU' },
                { men: '400m run in 1:20', woman: '400m run in 1:30' },
                { men: '5k run in 25:00', woman: '5k run in 26:30' },
                { men: '500m row in 1:40', woman: '500m row in 1:55' },
                { men: '2k row in 7:30', woman: '2k row in 8:30' },
                { men: '50 double under UB' },
                { men: 'Fran in 6:00', woman: 'Fran in 7:30' },
                { men: 'Grace in 5:00', woman: 'Grace in 6:00' }
            ],
        },
        {
            name: "Raging bull",
            needed: 11,
            requisites: [
                    { men: 'Back Squat 180%BW', woman: 'Back Squat 160%BW', isChecked: false },
                    { men: 'Deadlift 240%BW', woman: 'Deadlift 210%BW' },
                    { men: 'Bench Press 140%BW', woman: 'Bench Press 100%BW' },
                    { men: 'Clean & Jerk 140%BW', woman: 'Clean & Jerk 110%BW' },
                    { men: 'Snatch 100%BW', woman: 'Snatch 90%BW' },
                    { men: 'Pistol 12/leg' },
                    { men: '5 muscle up', woman: '3 muscle up' },
                    { men: '2m handstand walk' },
                    { men: '400m run in 1:15', woman: '400m run in 1:25' },
                    { men: '5k run in 23:00', woman: '5k run in 25:00' },
                    { men: '500m row in 1:38', woman: '500m row in 1:50' },
                    { men: '5k row in 19:20', woman: '5k row in 22:10' },
                    { men: '100 double under UB' },
                    { men: 'Isabel complete' },
                    { men: 'Amanda complete' }
                ],
        },
        {
            name: "Firebreather",
            needed: 11,
            requisites: [
                { men: 'Back Squat 190%BW', woman: 'Back Squat 170%BW', isChecked: false },
                { men: 'Deadlift 250%BW', woman: 'Deadlift 220%BW' },
                { men: 'Bench Press 150%BW', woman: 'Bench Press 110%BW' },
                { men: 'Clean & Jerk 150%BW', woman: 'Clean & Jerk 120%BW' },
                { men: 'Snatch 110%BW', woman: 'Snatch 100%BW' },
                { men: 'Pistol 15/leg' },
                { men: '10 muscle up', woman: '5 muscle up' },
                { men: '4.5m handstand walk' },
                { men: '400m run in 1:10', woman: '400m run in 1:20' },
                { men: '10k run in 46:00', woman: '10k run in 50:00' },
                { men: '500m row in 1:35', woman: '500m row in 1:45' },
                { men: '5k row in 18:45', woman: '5k row in 21:30' },
                { men: '150 double under UB' },
                { men: 'Isabel in 3:00', woman: 'Isabel in 4:30'  },
                { men: 'Amanda in 9:30', woman: 'Amanda in 11:00' }
            ]
        }
        ];