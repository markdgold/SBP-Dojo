'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        return queryInterface.bulkInsert('climbs', [{
                name: 'Big Cross Right',
                creator_id: 4,
                imgur: 'http://i.imgur.com/lxIqrUn.jpg',
                createdAt: '2016-12-13 12:31:41.732956-07',
                updatedAt: '2016-12-13 12:31:41.732956-07',
                style: 'crimp',
                grade_id: 3
            }, {
                name: 'Pinch Crimp 25',
                creator_id: 3,
                imgur: 'http://i.imgur.com/fwuxaqi.jpg',
                createdAt: '2016-05-10 12:31:41.732956-07',
                updatedAt: '2016-05-10 12:31:41.732956-07',
                style: 'power',
                grade_id: 1
            }, {
                name: 'Gonzo',
                creator_id: 3,
                imgur: 'http://i.imgur.com/O7ECFVz.jpg',
                createdAt: '2016-05-10 12:31:41.732956-07',
                updatedAt: '2016-05-10 12:31:41.732956-07',
                style: 'crimp',
                grade_id: 2
            }, {
                name: 'Loafs',
                creator_id: 3,
                imgur: 'http://i.imgur.com/ApD0Iqw.jpg',
                createdAt: '2017-02-16 12:31:41.732956-07',
                updatedAt: '2017-02-16 12:31:41.732956-07',
                style: 'power',
                grade_id: 3
            }, {
                name: 'Stinky Pinky',
                creator_id: 3,
                imgur: 'http://i.imgur.com/gHtDkfg.jpg',
                createdAt: '2017-02-23 12:31:41.732956-07',
                updatedAt: '2017-02-23 12:31:41.732956-07',
                style: 'power',
                grade_id: 1
            }, {
                name: 'Wood Mixed',
                creator_id: 3,
                imgur: 'http://i.imgur.com/gLLYYfy.jpg',
                createdAt: '2016-05-10 12:31:41.732956-06',
                updatedAt: '2016-05-10 12:31:41.732956-06',
                style: 'crimp',
                grade_id: 2
            }, {
                name: 'Pinch Pinch 25',
                creator_id: 3,
                imgur: 'http://i.imgur.com/HEN3o6R.jpg',
                createdAt: '2016-05-10 12:31:41.732956-05',
                updatedAt: '2016-05-10 12:31:41.732956-05',
                style: 'power',
                grade_id: 1
            }, {
                name: 'Pull Pow',
                creator_id: 3,
                imgur: 'http://i.imgur.com/mPQmTd6.jpg',
                createdAt: '2016-05-10 12:31:41.732956-04',
                updatedAt: '2016-05-10 12:31:41.732956-04',
                style: 'power',
                grade_id: 2
            }, {
                name: 'Big Pull 25',
                creator_id: 3,
                imgur: 'http://i.imgur.com/HlwVy6W.jpg',
                createdAt: '2016-05-10 12:31:41.732956-03',
                updatedAt: '2016-05-10 12:31:41.732956-03',
                style: 'power',
                grade_id: 1
            }, {
                name: 'Obey Gravity',
                creator_id: 3,
                imgur: 'http://i.imgur.com/5enasSN.jpg',
                createdAt: '2016-05-10 12:31:41.732956-02',
                updatedAt: '2016-05-10 12:31:41.732956-02',
                style: 'power',
                grade_id: 2
            }, {
                name: 'Dyno',
                creator_id: 3,
                imgur: 'http://i.imgur.com/tstmYED.jpg',
                createdAt: '2016-05-10 12:31:41.732956-01',
                updatedAt: '2016-05-10 12:31:41.732956-01',
                style: 'oneMover',
                grade_id: 1
            }, {
                name: 'The Future (hold for 3 sec)',
                creator_id: 3,
                imgur: 'http://i.imgur.com/EXo4DXl.jpg',
                createdAt: '2016-05-10 12:31:41.73295600',
                updatedAt: '2016-05-10 12:31:41.73295600',
                style: 'oneMover',
                grade_id: 1
            }, {
                name: 'Pinch Trifecta',
                creator_id: 6,
                imgur: 'http://i.imgur.com/72862T0.jpg',
                createdAt: '2016-05-10 12:31:41.73295601',
                updatedAt: '2016-05-10 12:31:41.73295601',
                style: 'power',
                grade_id: 3
            }, {
                name: 'Scarabs',
                creator_id: 6,
                imgur: 'http://i.imgur.com/skMeQJF.jpg',
                createdAt: '2016-05-10 12:31:41.73295602',
                updatedAt: '2016-05-10 12:31:41.73295602',
                style: 'crimp',
                grade_id: 3
            }, {
                name: 'Stereogram',
                creator_id: 6,
                imgur: 'http://i.imgur.com/rFAXEtU.jpg',
                createdAt: '2016-05-10 12:31:41.73295603',
                updatedAt: '2016-05-10 12:31:41.73295603',
                style: 'crimp',
                grade_id: 3
            }, {
                name: 'Young Blood',
                creator_id: 6,
                imgur: 'http://i.imgur.com/0vR8H5l.jpg',
                createdAt: '2016-05-10 12:31:41.73295604',
                updatedAt: '2016-05-10 12:31:41.73295604',
                style: 'power',
                grade_id: 3
            }, {
                name: 'Iron Man',
                creator_id: 6,
                imgur: 'http://i.imgur.com/4MXTb5r.jpg',
                createdAt: '2016-05-10 12:31:41.73295605',
                updatedAt: '2016-05-10 12:31:41.73295605',
                style: 'power',
                grade_id: 2
            }, {
                name: 'A Man Doll eh?',
                creator_id: 6,
                imgur: 'http://i.imgur.com/6LglAb2.jpg',
                createdAt: '2016-05-10 12:31:41.73295606',
                updatedAt: '2016-05-10 12:31:41.73295606',
                style: 'crimp',
                grade_id: 3
            }, {
                name: 'Shanghai',
                creator_id: 6,
                imgur: 'http://i.imgur.com/TM0YD46.jpg',
                createdAt: '2016-05-10 12:31:41.73295607',
                updatedAt: '2016-05-10 12:31:41.73295607',
                style: 'crimp',
                grade_id: 4
            }, {
                name: 'No Left Turns',
                creator_id: 6,
                imgur: 'http://i.imgur.com/N5uuhRn.jpg',
                createdAt: '2016-05-10 12:31:41.73295608',
                updatedAt: '2016-05-10 12:31:41.73295608',
                style: 'power',
                grade_id: 2
            }, {
                name: 'All Chewed Up',
                creator_id: 6,
                imgur: 'http://i.imgur.com/wxeGL6F.jpg',
                createdAt: '2016-05-10 12:31:41.73295609',
                updatedAt: '2016-05-10 12:31:41.73295609',
                style: 'crimp',
                grade_id: 1
            }, {
                name: 'Project',
                creator_id: 6,
                imgur: 'http://i.imgur.com/0SE4fvH.jpg',
                createdAt: '2016-05-10 12:31:41.73295610',
                updatedAt: '2016-05-10 12:31:41.73295610',
                style: 'power',
                grade_id: 3
            }, {
                name: 'No Shoes',
                creator_id: 6,
                imgur: 'http://i.imgur.com/WI3GFEM.jpg',
                createdAt: '2016-05-10 12:31:41.73295611',
                updatedAt: '2016-05-10 12:31:41.73295611',
                style: 'crimp',
                grade_id: 1
            }, {
                name: 'Iron Cross',
                creator_id: 6,
                imgur: 'http://i.imgur.com/PhmaQIj.jpg',
                createdAt: '2016-05-10 12:31:41.73295612',
                updatedAt: '2016-05-10 12:31:41.73295612',
                style: 'power',
                grade_id: 3
            }, {
                name: 'Big Papa Undies',
                creator_id: 4,
                imgur: 'http://i.imgur.com/hFGTjYg.jpg',
                createdAt: '2016-05-10 12:31:41.73295613',
                updatedAt: '2016-05-10 12:31:41.73295613',
                style: 'crimp',
                grade_id: 4
            }, {
                name: 'Crimp Trainer',
                creator_id: 4,
                imgur: 'http://i.imgur.com/gHlkubA.jpg',
                createdAt: '2016-05-10 12:31:41.73295614',
                updatedAt: '2016-05-10 12:31:41.73295614',
                style: 'crimp',
                grade_id: 3
            }, {
                name: 'Jug Feet',
                creator_id: 6,
                imgur: 'http://i.imgur.com/oJl4PRf.jpg',
                createdAt: '2016-05-10 12:31:41.73295615',
                updatedAt: '2016-05-10 12:31:41.73295615',
                style: 'crimp',
                grade_id: 2
            }, {
                name: 'Brian Wins',
                creator_id: 6,
                imgur: 'http://i.imgur.com/uWE5oYx.jpg',
                createdAt: '2016-05-10 12:31:41.73295616',
                updatedAt: '2016-05-10 12:31:41.73295616',
                style: 'power',
                grade_id: 3
            }, {
                name: 'Bump Dyno (bump to finish hold)',
                creator_id: 6,
                imgur: 'http://i.imgur.com/8zW8fIF.jpg',
                createdAt: '2016-05-10 12:31:41.73295617',
                updatedAt: '2016-05-10 12:31:41.73295617',
                style: 'oneMover',
                grade_id: 2
            }, {
                name: 'Campus',
                creator_id: 6,
                imgur: 'http://i.imgur.com/8H7F1uO.jpg',
                createdAt: '2016-05-10 12:31:41.73295618',
                updatedAt: '2016-05-10 12:31:41.73295618',
                style: 'crimp',
                grade_id: 3
            }, {
                name: 'Crimpterbator',
                creator_id: 6,
                imgur: 'http://i.imgur.com/sDKlkCv.jpg',
                createdAt: '2016-05-10 12:31:41.73295619',
                updatedAt: '2016-05-10 12:31:41.73295619',
                style: 'enduro',
                grade_id: 4
            }, {
                name: 'Pinch Shuffle',
                creator_id: 6,
                imgur: 'http://i.imgur.com/avf0hHa.jpg',
                createdAt: '2016-05-10 12:31:41.73295620',
                updatedAt: '2016-05-10 12:31:41.73295620',
                style: 'power',
                grade_id: 2
            }, {
                name: 'Marks Proj',
                creator_id: 8,
                imgur: 'http://i.imgur.com/HNrAS5q.jpg',
                createdAt: '2016-05-10 12:31:41.73295621',
                updatedAt: '2016-05-10 12:31:41.73295621',
                style: 'oneMover',
                grade_id: 2
            }, {
                name: 'Mark Wins',
                creator_id: 6,
                imgur: 'http://i.imgur.com/IZdjmR6.jpg',
                createdAt: '2016-05-10 12:31:41.73295622',
                updatedAt: '2016-05-10 12:31:41.73295622',
                style: 'oneMover',
                grade_id: 1
            }, {
                name: 'Lock Off Trainer',
                creator_id: 4,
                imgur: 'http://i.imgur.com/d4xD01J.jpg',
                createdAt: '2016-05-10 12:31:41.73295623',
                updatedAt: '2016-05-10 12:31:41.73295623',
                style: 'crimp',
                grade_id: 1
            }, {
                name: '4 Scarabs',
                creator_id: 4,
                imgur: 'http://i.imgur.com/0ZtfDeF.jpg',
                createdAt: '2016-05-10 12:31:41.73295624',
                updatedAt: '2016-05-10 12:31:41.73295624',
                style: 'crimp',
                grade_id: 2
            }, {
                name: 'The OG',
                creator_id: 4,
                imgur: 'http://i.imgur.com/jGfYq6y.jpg',
                createdAt: '2016-05-10 12:31:41.73295625',
                updatedAt: '2016-05-10 12:31:41.73295625',
                style: 'power',
                grade_id: 2
            }, {
                name: 'Big Cross Left',
                creator_id: 4,
                imgur: 'http://i.imgur.com/Yj8dkVw.jpg',
                createdAt: '2016-05-10 12:31:41.73295626',
                updatedAt: '2016-05-10 12:31:41.73295626',
                style: 'power',
                grade_id: 2
            }, {
                name: 'Cross',
                creator_id: 4,
                imgur: 'http://i.imgur.com/o889r1t.jpg',
                createdAt: '2016-05-10 12:31:41.73295627',
                updatedAt: '2016-05-10 12:31:41.73295627',
                style: 'crimp',
                grade_id: 3
            }, {
                name: 'Flagg',
                creator_id: 4,
                imgur: 'http://i.imgur.com/Kf0WnEf.jpg',
                createdAt: '2016-05-10 12:31:41.73295628',
                updatedAt: '2016-05-10 12:31:41.73295628',
                style: 'crimp',
                grade_id: 2
            }, {
                name: 'Gormenghast',
                creator_id: 4,
                imgur: 'http://i.imgur.com/GuKGoOr.jpg',
                createdAt: '2016-05-10 12:31:41.73295629',
                updatedAt: '2016-05-10 12:31:41.73295629',
                style: 'crimp',
                grade_id: 3
            }, {
                name: 'Heard You Like Softies',
                creator_id: 4,
                imgur: 'http://i.imgur.com/yBHbe6l.jpg',
                createdAt: '2016-05-10 12:31:41.73295630',
                updatedAt: '2016-05-10 12:31:41.73295630',
                style: 'power',
                grade_id: 1
            }, {
                name: 'Rose Finish',
                creator_id: 3,
                imgur: 'http://i.imgur.com/MfQldUs.jpg',
                createdAt: '2016-05-10 12:31:41.73295631',
                updatedAt: '2016-05-10 12:31:41.73295631',
                style: 'power',
                grade_id: 2
            }, {
                name: 'Left Var',
                creator_id: 4,
                imgur: 'http://i.imgur.com/1wNIqR0.jpg',
                createdAt: '2016-05-10 12:31:41.73295632',
                updatedAt: '2016-05-10 12:31:41.73295632',
                style: 'crimp',
                grade_id: 2
            }, {
                name: 'No Heels',
                creator_id: 4,
                imgur: 'http://i.imgur.com/JzJhhDO.jpg',
                createdAt: '2016-05-10 12:31:41.73295633',
                updatedAt: '2016-05-10 12:31:41.73295633',
                style: 'power',
                grade_id: 3
            }, {
                name: 'Nugies',
                creator_id: 4,
                imgur: 'http://i.imgur.com/zkFSFk0.jpg',
                createdAt: '2016-05-10 12:31:41.73295634',
                updatedAt: '2016-05-10 12:31:41.73295634',
                style: 'crimp',
                grade_id: 4
            }, {
                name: 'Right Var',
                creator_id: 4,
                imgur: 'http://i.imgur.com/vws41x5.jpg',
                createdAt: '2016-05-10 12:31:41.73295635',
                updatedAt: '2016-05-10 12:31:41.73295635',
                style: 'power',
                grade_id: 3
            }, {
                name: 'Shorty',
                creator_id: 4,
                imgur: 'http://i.imgur.com/V31i8pT.jpg',
                createdAt: '2016-05-10 12:31:41.73295636',
                updatedAt: '2016-05-10 12:31:41.73295636',
                style: 'power',
                grade_id: 4
            }, {
                name: 'Tall Version',
                creator_id: 4,
                imgur: 'http://i.imgur.com/SCeE2tn.jpg',
                createdAt: '2016-05-10 12:31:41.73295637',
                updatedAt: '2016-05-10 12:31:41.73295637',
                style: 'power',
                grade_id: 3
            }, {
                name: 'Wod Pench Left',
                creator_id: 4,
                imgur: 'http://i.imgur.com/1cOAq4z.jpg',
                createdAt: '2016-05-10 12:31:41.73295638',
                updatedAt: '2016-05-10 12:31:41.73295638',
                style: 'power',
                grade_id: 3
            }, {
                name: 'Wod Pench Right',
                creator_id: 4,
                imgur: 'http://i.imgur.com/owUVr8k.jpg',
                createdAt: '2016-05-10 12:31:41.73295639',
                updatedAt: '2016-05-10 12:31:41.73295639',
                style: 'power',
                grade_id: 2
            }, {
                name: 'Campus Dyno',
                creator_id: 9,
                imgur: 'http://i.imgur.com/SDhLvMl.jpg',
                createdAt: '2016-05-10 12:31:41.73295640',
                updatedAt: '2016-05-10 12:31:41.73295640',
                style: 'oneMover',
                grade_id: 3
            }, {
                name: 'Drew 1',
                creator_id: 9,
                imgur: 'http://i.imgur.com/YDQFUK0.jpg',
                createdAt: '2016-05-10 12:31:41.73295641',
                updatedAt: '2016-05-10 12:31:41.73295641',
                style: 'crimp',
                grade_id: 4
            }, {
                name: 'Drew 2',
                creator_id: 9,
                imgur: 'http://i.imgur.com/qyEH6ym.jpg',
                createdAt: '2016-05-10 12:31:41.73295642',
                updatedAt: '2016-05-10 12:31:41.73295642',
                style: 'crimp',
                grade_id: 4
            }, {
                name: 'Drew 3',
                creator_id: 9,
                imgur: 'http://i.imgur.com/qFIds54.jpg',
                createdAt: '2016-05-10 12:31:41.73295643',
                updatedAt: '2016-05-10 12:31:41.73295643',
                style: 'power',
                grade_id: 4
            }, {
                name: 'Drew 4',
                creator_id: 9,
                imgur: 'http://i.imgur.com/CFayFtN.jpg',
                createdAt: '2016-05-10 12:31:41.73295644',
                updatedAt: '2016-05-10 12:31:41.73295644',
                style: 'power',
                grade_id: 4
            }, {
                name: 'One Arm Campus',
                creator_id: 9,
                imgur: 'http://i.imgur.com/lt9O7aE.jpg',
                createdAt: '2016-05-10 12:31:41.73295645',
                updatedAt: '2016-05-10 12:31:41.73295645',
                style: 'oneMover',
                grade_id: 3
            }, {
                name: 'Undercling Madness',
                creator_id: 9,
                imgur: 'http://i.imgur.com/LT983uu.jpg',
                createdAt: '2016-05-10 12:31:41.73295646',
                updatedAt: '2016-05-10 12:31:41.73295646',
                style: 'power',
                grade_id: 4
            }, {
                name: 'Pinch Punch',
                creator_id: 3,
                imgur: 'http://i.imgur.com/ZP4bFn5.jpg',
                createdAt: '2017-03-02 12:31:41.732956-07',
                updatedAt: '2017-03-02 12:31:41.732956-07',
                style: 'power',
                grade_id: 3
            }, {
                name: 'CSS',
                creator_id: 3,
                imgur: 'http://i.imgur.com/VxbESLA.jpg',
                createdAt: '2017-03-19 12:31:41.732956-07',
                updatedAt: '2017-03-19 12:31:41.732956-07',
                style: 'power',
                grade_id: 3
            }, {
                name: 'HTML',
                creator_id: 3,
                imgur: 'http://i.imgur.com/2AyoGBs.jpg',
                createdAt: '2017-03-19 12:31:41.732956-06',
                updatedAt: '2017-03-19 12:31:41.732956-06',
                style: 'power',
                grade_id: 3
            }, {
                name: 'JS',
                creator_id: 3,
                imgur: 'http://i.imgur.com/ztQin95.jpg',
                createdAt: '2017-03-19 12:31:41.732956-05',
                updatedAt: '2017-03-19 12:31:41.732956-05',
                style: 'crimp',
                grade_id: 3
            }, {
                name: 'Moon 6B',
                creator_id: 3,
                imgur: 'http://i.imgur.com/PMFpw9O.jpg',
                createdAt: '2017-03-19 12:31:41.732956-04',
                updatedAt: '2017-03-19 12:31:41.732956-04',
                style: 'power',
                grade_id: 2
            }, {
                name: 'VTC1',
                creator_id: 8,
                imgur: 'http://i.imgur.com/tjauAJN.jpg',
                createdAt: '2017-03-28 12:31:41.732956-07',
                updatedAt: '2017-03-28 12:31:41.732956-07',
                style: 'power',
                grade_id: 3
            }, {
                name: 'VTC2',
                creator_id: 8,
                imgur: 'http://i.imgur.com/ojkLLut.jpg',
                createdAt: '2017-03-28 12:31:41.732956-06',
                updatedAt: '2017-03-28 12:31:41.732956-06',
                style: 'power',
                grade_id: 3
            }, {
                name: 'Hormonal Monkey',
                creator_id: 6,
                imgur: 'http://i.imgur.com/f7qOE75.jpg',
                createdAt: '2017-04-11 12:31:41.732956-07',
                updatedAt: '2017-04-11 12:31:41.732956-07',
                style: 'oneMover',
                grade_id: 1
            }

        ]);
    },

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};
