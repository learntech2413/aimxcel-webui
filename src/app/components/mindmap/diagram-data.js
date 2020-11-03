"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Local data for diagram layouts
 */
exports.species = [
    { 'Name': 'Species', 'fillColor': '#3DD94A' },
    { 'Name': 'Plants', 'Category': 'Species' },
    { 'Name': 'Fungi', 'Category': 'Species' },
    { 'Name': 'Lichens', 'Category': 'Species' },
    { 'Name': 'Animals', 'Category': 'Species' },
    { 'Name': 'Mosses', 'Category': 'Plants' },
    { 'Name': 'Ferns', 'Category': 'Plants' },
    { 'Name': 'Gymnosperms', 'Category': 'Plants' },
    { 'Name': 'Dicotyledens', 'Category': 'Plants' },
    { 'Name': 'Monocotyledens', 'Category': 'Plants' },
    { 'Name': 'Invertebrates', 'Category': 'Animals' },
    { 'Name': 'Vertebrates', 'Category': 'Animals' },
    { 'Name': 'Insects', 'Category': 'Invertebrates' },
    { 'Name': 'Molluscs', 'Category': 'Invertebrates' },
    { 'Name': 'Crustaceans', 'Category': 'Invertebrates' },
    { 'Name': 'Others', 'Category': 'Invertebrates' },
    { 'Name': 'Fish', 'Category': 'Vertebrates' },
    { 'Name': 'Amphibians', 'Category': 'Vertebrates' },
    { 'Name': 'Reptiles', 'Category': 'Vertebrates' },
    { 'Name': 'Birds', 'Category': 'Vertebrates' },
    { 'Name': 'Mammals', 'Category': 'Vertebrates' }
];
exports.familyData = [
    { 'Name': 'Andrew', 'branch': 'root', 'spouse': 'Maria Anders' },
    { 'Name': 'Janet', 'spouse': 'Nancy Cruz', 'Category': 'Andrew' },
    { 'Name': 'Brian', 'spouse': 'Donald Watt', 'Category': 'Andrew' },
    { 'Name': 'Kathleen', 'spouse': 'Starr Barnette', 'Category': 'Andrew' },
    { 'Name': 'Thomas Hardy', 'spouse': 'Patricia Joe', 'Category': 'Janet' },
    { 'Name': 'Melanie', 'spouse': 'Anne Barnette', 'Category': 'Janet' },
    { 'Name': 'Francisco Yangi', 'spouse': 'Christina kaff', 'Category': 'Brian' },
    { 'Name': 'Janine Labrune', 'spouse': 'Elizabeth Roel', 'Category': 'Thomas Hardy' },
    { 'Name': 'Mario Pontes', 'spouse': 'Yoshi Latimer', 'Category': 'Thomas Hardy' },
    { 'Name': 'Peter Citeaux', 'spouse': 'Ann Devoon', 'Category': 'Francisco Yangi' },
    { 'Name': 'Martine Rancé', 'spouse': 'Elizabeth Mary', 'Category': 'Francisco Yangi' },
    { 'Name': 'Yang', 'spouse': 'Lino Rodri', 'Category': 'Martine Rancé' },
    { 'Name': 'Philip Cramer', 'spouse': 'Pedro Afonso', 'Category': 'Philip Cramer' }
];
exports.artificialIntelligence = [
    { 'Name': 'Artificial Intelligence', 'fillColor': '#916DAF', 'branch': 'root' },
    { 'Name': 'Machine Learning', 'Category': 'Artificial Intelligence' },
    { 'Name': 'Natural Language Processing (NLP)', 'Category': 'Artificial Intelligence' },
    { 'Name': 'Speech', 'Category': 'Artificial Intelligence' },
    { 'Name': 'Planning, Scheduling, and Optimization', 'Category': 'Artificial Intelligence' },
    { 'Name': 'Robotics', 'Category': 'Artificial Intelligence' },
    { 'Name': 'Vision', 'Category': 'Artificial Intelligence' },
    { 'Name': ' Deep Learning ', 'Category': 'Machine Learning' },
    { 'Name': 'Predictive Analytics ', 'Category': 'Machine Learning' },
    { 'Name': 'Translation ', 'Category': 'Natural Language Processing (NLP)' },
    { 'Name': 'Classification', 'Category': 'Natural Language Processing (NLP)' },
    { 'Name': 'Information Extraction', 'Category': 'Natural Language Processing (NLP)' },
    { 'Name': 'Speech to Text', 'Category': 'Speech' },
    { 'Name': 'Text to Speech', 'Category': 'Speech' },
    { 'Name': 'Image Recognition ', 'Category': 'Vision' },
    { 'Name': 'Machine Vision', 'Category': 'Vision' }
];
exports.keyBoardData = [
    { 'id': 'A', 'fill': '#3498DB' },
    { 'id': 'B', 'ancestor': 'A', 'fill': '#E74C3C' },
    { 'id': 'C', 'ancestor': 'A', 'fill': '#E74C3C' },
    { 'id': 'D', 'ancestor': 'A', 'fill': '#E74C3C' },
    { 'id': 'E', 'ancestor': 'B', 'fill': '#F39C12' },
    { 'id': 'F', 'ancestor': 'B', 'fill': '#F39C12' },
    { 'id': 'G', 'ancestor': 'F', 'fill': '#8E44AD' },
    { 'id': 'H', 'ancestor': 'F', 'fill': '#8E44AD' },
    { 'id': 'I', 'ancestor': 'G', 'fill': '#1E8449' },
    { 'id': 'J', 'ancestor': 'G', 'fill': '#1E8449' }
];
exports.localBindData = [
    { 'Id': 'parent', 'Role': 'Board', 'color': '#71AF17' },
    { 'Id': '1', 'Role': 'General Manager', 'Manager': 'parent', 'ChartType': 'right', 'color': '#71AF17' },
    { 'Id': '11', 'Role': 'Assistant General Manager', 'Manager': '1', 'color': '#71AF17' },
    { 'Id': '2', 'Role': 'Human Resource Manager', 'Manager': '1', 'ChartType': 'right', 'color': '#1859B7' },
    { 'Id': '3', 'Role': 'Trainers', 'Manager': '2', 'color': '#2E95D8' },
    { 'Id': '4', 'Role': 'Recruiting Team', 'Manager': '2', 'color': '#2E95D8' },
    { 'Id': '5', 'Role': 'Finance Asst. Manager', 'Manager': '2', 'color': '#2E95D8' },
    { 'Id': '6', 'Role': 'Design Manager', 'Manager': '1', 'ChartType': 'right', 'color': '#1859B7' },
    { 'Id': '7', 'Role': 'Design Supervisor', 'Manager': '6', 'color': '#2E95D8' },
    { 'Id': '8', 'Role': 'Development Supervisor', 'Manager': '6', 'color': '#2E95D8' },
    { 'Id': '9', 'Role': 'Drafting Supervisor', 'Manager': '6', 'color': '#2E95D8' },
    { 'Id': '10', 'Role': 'Operations Manager', 'Manager': '1', 'ChartType': 'right', 'color': '#1859B7' },
    { 'Id': '11', 'Role': 'Statistics Department', 'Manager': '10', 'color': '#2E95D8' },
    { 'Id': '12', 'Role': 'Logistics Department', 'Manager': '10', 'color': '#2E95D8' },
    { 'Id': '16', 'Role': 'Marketing Manager', 'Manager': '1', 'ChartType': 'right', 'color': '#1859B7' },
    { 'Id': '17', 'Role': 'Overseas Sales Manager', 'Manager': '16', 'color': '#2E95D8' },
    { 'Id': '18', 'Role': 'Petroleum Manager', 'Manager': '16', 'color': '#2E95D8' },
    { 'Id': '20', 'Role': 'Service Department Manager', 'Manager': '16', 'color': '#2E95D8' },
    { 'Id': '21', 'Role': 'Quality Control Department', 'Manager': '16', 'color': '#2E95D8' }
];
exports.multiParentData = [
    { 'Name': 'node11', 'fillColor': '#e7704c', 'border': '#c15433' },
    { 'Name': 'node12', 'ReportingPerson': ['node114'], 'fillColor': '#efd46e', 'border': '#d6b123' },
    { 'Name': 'node13', 'ReportingPerson': ['node12'], 'fillColor': '#58b087', 'border': '#16955e' },
    { 'Name': 'node14', 'ReportingPerson': ['node12'], 'fillColor': '#58b087', 'border': '#16955e' },
    { 'Name': 'node15', 'ReportingPerson': ['node12'], 'fillColor': '#58b087', 'border': '#16955e' },
    { 'Name': 'node16', 'ReportingPerson': [], 'fillColor': '#14ad85' },
    { 'Name': 'node17', 'ReportingPerson': ['node13', 'node14', 'node15'], 'fillColor': '#659be5', 'border': '#3a6eb5' },
    { 'Name': 'node18', 'ReportingPerson': [], 'fillColor': '#14ad85' },
    { 'Name': 'node19', 'ReportingPerson': ['node16', 'node17', 'node18'], 'fillColor': '#8dbe6c', 'border': '#489911' },
    { 'Name': 'node110', 'ReportingPerson': ['node16', 'node17', 'node18'], 'fillColor': '#8dbe6c', 'border': '#489911' },
    { 'Name': 'node111', 'ReportingPerson': ['node16', 'node17', 'node18', 'node116'], 'fillColor': '#8dbe6c', 'border': '#489911' },
    { 'Name': 'node21', 'fillColor': '#e7704c', 'border': '#c15433' },
    { 'Name': 'node22', 'ReportingPerson': ['node114'], 'fillColor': '#efd46e', 'border': '#d6b123' },
    { 'Name': 'node23', 'ReportingPerson': ['node22'], 'fillColor': '#58b087', 'border': '#16955e' },
    { 'Name': 'node24', 'ReportingPerson': ['node22'], 'fillColor': '#58b087', 'border': '#16955e' },
    { 'Name': 'node25', 'ReportingPerson': ['node22'], 'fillColor': '#58b087', 'border': '#16955e' },
    { 'Name': 'node26', 'ReportingPerson': [], 'fillColor': '#14ad85' },
    { 'Name': 'node27', 'ReportingPerson': ['node23', 'node24', 'node25'], 'fillColor': '#659be5', 'border': '#3a6eb5' },
    { 'Name': 'node28', 'ReportingPerson': [], 'fillColor': '#14ad85' },
    { 'Name': 'node29', 'ReportingPerson': ['node26', 'node27', 'node28', 'node116'], 'fillColor': '#8dbe6c', 'border': '#489911' },
    { 'Name': 'node210', 'ReportingPerson': ['node26', 'node27', 'node28'], 'fillColor': '#8dbe6c', 'border': '#489911' },
    { 'Name': 'node211', 'ReportingPerson': ['node26', 'node27', 'node28'], 'fillColor': '#8dbe6c', 'border': '#489911' },
    { 'Name': 'node31', 'fillColor': '#e7704c', 'border': '#c15433' },
    { 'Name': 'node114', 'ReportingPerson': ['node11', 'node21', 'node31'], 'fillColor': '#f3904a', 'border': '#d3722e' },
    { 'Name': 'node116', 'ReportingPerson': ['node12', 'node22'], 'fillColor': '#58b087', 'border': '#16955e' },
];
exports.pertChartData = [
    {
        'id': 'Start Project', 'branch': 'root', 'duration': '4',
        'startDate': '04/19/2018', 'endDate': ' 08/19/2018'
    },
    {
        'id': 'Design', 'Category': 'Start Project',
        'duration': '2', 'startDate': '08/20/2018', 'endDate': '10/20/2018'
    },
    {
        'id': 'Formalize Specification', 'Category': 'Start Project',
        'duration': '2', 'startDate': '10/21/2018', 'endDate': '12/22/2018'
    },
    {
        'id': 'Write Documentation', 'Category': 'Start Project',
        'duration': '1', 'startDate': '12/23/2018', 'endDate': '01/22/2019'
    },
    {
        'id': 'Release Prototype', 'Category': 'Design',
        'duration': '1', 'startDate': '01/23/2019', 'endDate': ' 02/23/2019'
    },
    {
        'id': 'Testing', 'Category': ['Formalize Specification', 'Release Prototype'],
        'duration': '2', 'startDate': '02/24/2019', 'endDate': '04/22/2019'
    },
    {
        'id': 'Release Project', 'Category': 'Release Prototype',
        'duration': '1', 'startDate': '04/23/2019', 'endDate': '05/24/2019'
    },
    {
        'id': 'Review Changes', 'Category': 'Write Documentation',
        'duration': '1', 'startDate': '05/25/2019', 'endDate': '06/26/2019'
    },
    {
        'id': 'Publish Documentation', 'Category': 'Review Changes',
        'duration': '1', 'startDate': '06/21/2019', 'endDate': '07/22/2019'
    },
    {
        'id': 'Finish', 'Category': ['Publish Documentation', 'Release Project'],
        'duration': '1', 'startDate': '07/23/2019', 'endDate': '08/24/2019'
    }
];
exports.organizationTree = [
    { 'Id': 'parent', 'Role': 'University President', 'color': '#822B86' },
    { 'Id': '1', 'Role': 'Chancellor', 'Supervision': 'parent', 'color': '#3c418B' },
    { 'Id': '2', 'Role': 'Vice President', 'Supervision': 'parent', 'color': '#3c418B' },
    { 'Id': '3', 'Role': 'Student Affairs', 'Supervision': '2', 'ChartType': 'left', 'color': '#3c418B' },
    { 'Id': '4', 'Role': 'Admin & Finance', 'Supervision': '2', 'color': '#3c418B' },
    { 'Id': '5', 'Role': 'Academics', 'Supervision': '2', 'color': '#3c418B' },
    { 'Id': '6', 'Role': 'External Relations', 'Supervision': '2', 'ChartType': 'right', 'color': '#3c418B' },
    { 'Id': '7', 'Role': 'Activities and Special events', 'Supervision': '3', 'color': '#267011' },
    { 'Id': '8', 'Role': 'Educational Service Center', 'Supervision': '3', 'color': '#267011' },
    { 'Id': '9', 'Role': 'Health Care', 'Supervision': '3', 'color': '#267011' },
    { 'Id': '10', 'Role': 'Housing and Food Service Center', 'Supervision': '3', 'color': '#267011' },
    { 'Id': '11', 'Role': 'Students Development', 'Supervision': '3', 'color': '#267011' },
    { 'Id': '13', 'Role': 'General Maintenance', 'Supervision': '4', 'color': '#267011' },
    { 'Id': '14', 'Role': 'Budget and Audit', 'Supervision': '4', 'color': '#71AF17' },
    { 'Id': '15', 'Role': 'Human Resource', 'Supervision': '4', 'color': '#267011' },
    { 'Id': '16', 'Role': 'Information Technology', 'Supervision': '4', 'color': '#71AF17' },
    { 'Id': '17', 'Role': 'Facilities Management', 'Supervision': '4', 'color': '#267011' },
    { 'Id': '117', 'Role': 'Environment Maintenance', 'Supervision': '4', 'color': '#71AF17' },
    { 'Id': '217', 'Role': 'Custodial Service', 'Supervision': '4', 'color': '#267011' },
    { 'Id': '18', 'Role': 'Faculties', 'Supervision': '5', 'color': '#267011' },
    { 'Id': '19', 'Role': 'Educational Service', 'Supervision': '5', 'color': '#71AF17' },
    { 'Id': '20', 'Role': 'University Library', 'Supervision': '5', 'color': '#267011' },
    { 'Id': '21', 'Role': 'Center for Planning', 'Supervision': '5', 'color': '#71AF17' },
    { 'Id': '22', 'Role': 'Summer Session', 'Supervision': '5', 'color': '#267011' },
    { 'Id': '23', 'Role': 'Fund Development', 'Supervision': '6', 'color': '#71AF17' },
    { 'Id': '24', 'Role': 'Admission', 'Supervision': '6', 'color': '#71AF17' },
    { 'Id': '25', 'Role': 'Alumini Relations', 'Supervision': '6', 'color': '#71AF17' },
    { 'Id': '12', 'Role': 'Recruitment & Promotion', 'Supervision': '6', 'color': '#71AF17' }
];
exports.hierarchicalTree = [
    { 'Name': 'Diagram', 'fillColor': '#916DAF' },
    { 'Name': 'Layout', 'Category': 'Diagram' },
    { 'Name': 'Tree Layout', 'Category': 'Layout' },
    { 'Name': 'Organizational Chart', 'Category': 'Layout' },
    { 'Name': 'Hierarchical Tree', 'Category': 'Tree Layout' },
    { 'Name': 'Radial Tree', 'Category': 'Tree Layout' },
    { 'Name': 'Mind Map', 'Category': 'Hierarchical Tree' },
    { 'Name': 'Family Tree', 'Category': 'Hierarchical Tree' },
    { 'Name': 'Management', 'Category': 'Organizational Chart' },
    { 'Name': 'Human Resources', 'Category': 'Management' },
    { 'Name': 'University', 'Category': 'Management' },
    { 'Name': 'Business', 'Category': 'Management' },
];
exports.radialTree = [
    {
        'Id': 'parent', 'Name': 'Maria Anders', 'Designation': 'Managing Director'
    },
    {
        'Id': 1, 'Name': 'Ana Trujillo', 'Designation': 'Project Manager',
        'ReportingPerson': 'parent'
    },
    {
        'Id': 2, 'Name': 'Lino Rodri', 'Designation': 'Project Manager',
        'ReportingPerson': 'parent'
    },
    {
        'Id': 3, 'Name': 'Philip Cramer', 'Designation': 'Project Manager',
        'ReportingPerson': 'parent'
    },
    {
        'Id': 4, 'Name': 'Pedro Afonso', 'Designation': 'Project Manager',
        'ReportingPerson': 'parent'
    },
    {
        'Id': 5, 'Name': 'Anto Moreno', 'Designation': 'Project Lead',
        'ReportingPerson': 1
    },
    {
        'Id': 6, 'Name': 'Elizabeth Roel', 'Designation': 'Project Lead',
        'ReportingPerson': 1
    },
    {
        'Id': 7, 'Name': 'Aria Cruz', 'Designation': 'Project Lead',
        'ReportingPerson': 1
    },
    {
        'Id': 8, 'Name': 'Eduardo Roel', 'Designation': 'Project Lead',
        'ReportingPerson': 1
    },
    {
        'Id': 9, 'Name': 'Howard Snyd', 'Designation': 'Project Lead',
        'ReportingPerson': 2
    },
    {
        'Id': 10, 'Name': 'Daniel Tonini', 'Designation': 'Project Lead',
        'ReportingPerson': 2
    },
    {
        'Id': 11, 'Name': 'Nardo Batista', 'Designation': 'Project Lead',
        'ReportingPerson': 89
    },
    {
        'Id': 12, 'Name': 'Michael Holz', 'Designation': 'Project Lead',
        'ReportingPerson': 89
    },
    {
        'Id': 13, 'Name': 'Kloss Perrier', 'Designation': 'Project Lead',
        'ReportingPerson': 90
    },
    {
        'Id': 14, 'Name': 'Liz Nixon', 'Designation': 'Project Lead',
        'ReportingPerson': 3
    },
    {
        'Id': 15, 'Name': 'Paul Henriot', 'Designation': 'Project Lead',
        'ReportingPerson': 3
    },
    {
        'Id': 16, 'Name': 'Paula Parente', 'Designation': 'Project Lead',
        'ReportingPerson': 90
    },
    {
        'Id': 17, 'Name': 'Matti Kenna', 'Designation': 'Project Lead',
        'ReportingPerson': 4
    },
    {
        'Id': 18, 'Name': 'Laura Callahan', 'Designation': 'Project Lead',
        'ReportingPerson': 4
    },
    {
        'Id': 19, 'Name': 'Simon Roel', 'Designation': 'Project Lead',
        'ReportingPerson': 4
    },
    {
        'Id': 20, 'Name': 'Thomas Hardy', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 12
    },
    {
        'Id': 21, 'Name': 'Martín Kloss', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 5
    },
    {
        'Id': 23, 'Name': 'Diego Roel', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 7
    },
    {
        'Id': 24, 'Name': 'José Pedro ', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 8
    },
    {
        'Id': 25, 'Name': 'Manu Pereira', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 8
    },
    {
        'Id': 26, 'Name': 'Annette Roel', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 25
    },
    {
        'Id': 27, 'Name': 'Catherine Kaff', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 8
    },
    {
        'Id': 28, 'Name': 'Lúcia Carvalho', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 12
    },
    {
        'Id': 29, 'Name': 'Alej Camino', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 13
    },
    {
        'Id': 30, 'Name': 'Liu Wong', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 14
    },
    {
        'Id': 31, 'Name': 'Karin Josephs', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 14
    },
    {
        'Id': 33, 'Name': 'Pirkko King', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 17
    },
    {
        'Id': 34, 'Name': 'Karl Jablonski', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 18
    },
    {
        'Id': 35, 'Name': 'Zbyszek Yang', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 19
    },
    {
        'Id': 36, 'Name': 'Nancy', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 5
    },
    {
        'Id': 37, 'Name': 'Anne', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 6
    },
    {
        'Id': 38, 'Name': 'Isabel Castro', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 7
    },
    {
        'Id': 39, 'Name': 'Nardo Batista', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 9
    },
    {
        'Id': 40, 'Name': 'Rene Phillips', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 16
    },
    {
        'Id': 41, 'Name': 'Rita Pfalzheim', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 9
    },
    {
        'Id': 42, 'Name': 'Janete Limeira', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 11
    },
    {
        'Id': 43, 'Name': 'Christina kaff', 'Designation': 'S/w Engg',
        'ReportingPerson': 20
    },
    {
        'Id': 44, 'Name': 'Peter Franken', 'Designation': 'S/w Engg',
        'ReportingPerson': 21
    },
    {
        'Id': 45, 'Name': 'Carlos Schmitt', 'Designation': 'S/w Engg',
        'ReportingPerson': 23
    },
    {
        'Id': 46, 'Name': 'Yoshi Wilson', 'Designation': 'S/w Engg',
        'ReportingPerson': 23
    },
    {
        'Id': 47, 'Name': 'Jean Fresnière', 'Designation': 'S/w Engg',
        'ReportingPerson': 24
    },
    {
        'Id': 48, 'Name': 'Simon Roel', 'Designation': 'S/w Engg',
        'ReportingPerson': 25
    },
    {
        'Id': 52, 'Name': 'Palle Ibsen', 'Designation': 'S/w Engg',
        'ReportingPerson': 29
    },
    {
        'Id': 53, 'Name': 'Lúcia Carvalho', 'Designation': 'S/w Engg',
        'ReportingPerson': 30
    },
    {
        'Id': 54, 'Name': 'Hanna Moos', 'Designation': 'Project Trainee',
        'ReportingPerson': 30
    },
    {
        'Id': 55, 'Name': 'Peter Citeaux', 'Designation': 'Project Trainee',
        'ReportingPerson': 33
    },
    {
        'Id': 56, 'Name': 'Elizabeth Mary', 'Designation': 'Project Trainee',
        'ReportingPerson': 33
    },
    {
        'Id': 57, 'Name': 'Victoria Ash', 'Designation': 'Project Trainee',
        'ReportingPerson': 34
    },
    {
        'Id': 58, 'Name': 'Janine Labrune', 'Designation': 'Project Trainee',
        'ReportingPerson': 35
    },
    {
        'Id': 60, 'Name': 'Carine Schmitt', 'Designation': 'Project Trainee',
        'ReportingPerson': 11
    },
    {
        'Id': 61, 'Name': 'Paolo Accorti', 'Designation': 'Project Trainee',
        'ReportingPerson': 38
    },
    {
        'Id': 62, 'Name': 'André Fonseca', 'Designation': 'Project Trainee',
        'ReportingPerson': 41
    },
    {
        'Id': 63, 'Name': 'Mario Pontes', 'Designation': 'Project Trainee',
        'ReportingPerson': 6
    },
    {
        'Id': 64, 'Name': 'John Steel', 'Designation': 'Project Trainee',
        'ReportingPerson': 7
    },
    {
        'Id': 65, 'Name': 'Renate Jose', 'Designation': 'Project Trainee',
        'ReportingPerson': 42
    },
    {
        'Id': 66, 'Name': 'Jaime Yorres', 'Designation': 'Project Trainee',
        'ReportingPerson': 20
    },
    {
        'Id': 67, 'Name': 'Alex Feuer', 'Designation': 'Project Trainee',
        'ReportingPerson': 21
    },
    {
        'Id': 70, 'Name': 'Helen Marie', 'Designation': 'Project Trainee',
        'ReportingPerson': 24
    },
    {
        'Id': 73, 'Name': 'Sergio roel', 'Designation': 'Project Trainee',
        'ReportingPerson': 37
    },
    {
        'Id': 75, 'Name': 'Janete Limeira', 'Designation': 'Project Trainee',
        'ReportingPerson': 29
    },
    {
        'Id': 76, 'Name': 'Jonas Bergsen', 'Designation': 'Project Trainee',
        'ReportingPerson': 18
    },
    {
        'Id': 77, 'Name': 'Miguel Angel', 'Designation': 'Project Trainee',
        'ReportingPerson': 18
    },
    {
        'Id': 80, 'Name': 'Helvetis Nagy', 'Designation': 'Project Trainee',
        'ReportingPerson': 34
    },
    {
        'Id': 81, 'Name': 'Rita Müller', 'Designation': 'Project Trainee',
        'ReportingPerson': 35
    },
    {
        'Id': 82, 'Name': 'Georg Pipps', 'Designation': 'Project Trainee',
        'ReportingPerson': 36
    },
    {
        'Id': 83, 'Name': 'Horst Kloss', 'Designation': 'Project Trainee',
        'ReportingPerson': 37
    },
    {
        'Id': 84, 'Name': 'Paula Wilson', 'Designation': 'Project Trainee',
        'ReportingPerson': 38
    },
    {
        'Id': 85, 'Name': ' Jose Michael', 'Designation': 'Project Trainee',
        'ReportingPerson': 37
    },
    {
        'Id': 86, 'Name': 'Mauri Moroni', 'Designation': 'Project Trainee',
        'ReportingPerson': 40
    },
    {
        'Id': 87, 'Name': 'Michael Holz', 'Designation': 'Project Trainee',
        'ReportingPerson': 41
    },
    {
        'Id': 88, 'Name': 'Alej Camino', 'Designation': 'Project Trainee',
        'ReportingPerson': 42
    },
    {
        'Id': 89, 'Name': 'Jytte Petersen', 'Designation': 'Project Manager',
        'ReportingPerson': 'parent'
    },
    {
        'Id': 90, 'Name': 'Mary Saveley', 'Designation': 'Project Manager',
        'ReportingPerson': 'parent'
    },
    {
        'Id': 91, 'Name': 'Robert King', 'Designation': 'Project Manager',
        'ReportingPerson': 'parent'
    },
    {
        'Id': 95, 'Name': 'Roland Mendel', 'Designation': 'CSR',
        'ReportingPerson': 19
    },
    {
        'Id': 98, 'Name': 'Helen Bennett', 'Designation': 'SR',
        'ReportingPerson': 42
    },
    {
        'Id': 99, 'Name': 'Carlos Nagy', 'Designation': 'SR',
        'ReportingPerson': 42
    },
    {
        'Id': 100, 'Name': 'Felipe Kloss', 'Designation': 'SR',
        'ReportingPerson': 77
    },
];
exports.CHC8L06 = [{
    "id": 1,
    "Label": "Fossil Fuels",
    "branch": "Root",
    "fill": "blue"
},{
    "id": 2,
    "Label": "Exhaustible",
    "parentId": 1,
    "branch": "Right",
    "fill": "#8B2085"
},{
    "id": 3,
    "Label": "Petroleum",
    "parentId": 1,
    "branch": "Right",
    "fill": "#CDBE07"
},{
    "id": 4,
    "Label": "Natural Gas",
    "parentId": 1,
    "branch": "Left",
    "fill": "#208B7E"
},{
    "id": 5,
    "Label": "Coal",
    "parentId": 1,
    "branch": "Left",
    "fill": "#7C716F"
},{
    "id": 6,
    "Label": "CNG",
    "parentId": 4,
    "branch": "Left",
    "fill": "#44D3AE"
},{
    "id": 7,
    "Label": "Cooking",
    "parentId": 6,
    "branch": "Left",
    "fill": "#44D3AE"
},{
    "id": 8,
    "Label": "Transport",
    "parentId": 6,
    "branch": "Left",
    "fill": "#44D3AE"
},{
    "id": 9,
    "Label": "Petrol",
    "parentId": 3,
    "branch": "Right",
    "fill": "#FFC300"
},{
    "id": 10,
    "Label": "Kerosene",
    "parentId": 3,
    "branch": "Right",
    "fill": "#FFC300"
},{
    "id": 11,
    "Label": "LPG",
    "parentId": 3,
    "branch": "Right",
    "fill": "#FFC300"
},{
    "id": 12,
    "Label": "Diesel",
    "parentId": 3,
    "branch": "Right",
    "fill": "#FFC300"
},{
    "id": 13,
    "Label": "Coal Gas",
    "parentId": 5,
    "branch": "Left",
    "fill": "#7C716F"
},{
    "id": 14,
    "Label": "Coke",
    "parentId": 5,
    "branch": "Left",
    "fill": "#7C716F"
},{
    "id": 15,
    "Label": "Coal Tar",
    "parentId": 5,
    "branch": "Left",
    "fill": "#7C716F"
},{
    "id": 16,
    "Label": "Lightening",
    "parentId": 13,
    "branch": "Left",
    "fill": "#BCB9B6"
},{
    "id": 17,
    "Label": "Fuel",
    "parentId": 13,
    "branch": "Left",
    "fill": "#BCB9B6"
},{
    "id": 18,
    "Label": "Extracting Metals",
    "parentId": 14,
    "branch": "Left",
    "fill": "#BCB9B6"
},{
    "id": 19,
    "Label": "Used in Steel Manufacturing",
    "parentId": 14,
    "branch": "Left",
    "fill": "#BCB9B6"
},{
    "id": 20,
    "Label": "Paints",
    "parentId": 15,
    "branch": "Left",
    "fill": "#BCB9B6"
},{
    "id": 21,
    "Label": "Roof Materials",
    "parentId": 15,
    "branch": "Left",
    "fill": "#BCB9B6"
},{
    "id": 22,
    "Label": "Pesticides",
    "parentId": 15,
    "branch": "Left",
    "fill": "#BCB9B6"
},{
    "id": 23,
    "Label": "Explosives",
    "parentId": 15,
    "branch": "Left",
    "fill": "#BCB9B6"
},{
    "id": 24,
    "Label": "Napthelenes",
    "parentId": 15,
    "branch": "Left",
    "fill": "#BCB9B6"
},{
    "id": 25,
    "Label": "Roads",
    "parentId": 15,
    "branch": "Left",
    "fill": "#BCB9B6"
},{
    "id": 26,
    "Label": "Manufacturing Medicine",
    "parentId": 15,
    "branch": "Left",
    "fill": "#BCB9B6"
}
] 
exports.testData = [
    { Label: "Fossil Fuels", id: 1, branch: 'Root',fill:"blue"  },
    { Label: "Exhaustible",  id: 2, parentId: 1,branch: 'Right', fill:"#8B2085" },
    { Label: "Petroleum",    id: 3, parentId: 1,branch: 'Right', fill:"#CDBE07"},
    { Label: "Natural Gas",  id: 4, parentId: 1,branch: 'Left', fill:"#208B7E"},
    { Label: "Coal",  id: 5, parentId: 1, branch: 'Left', fill:"#7C716F"   },
    { Label: "CNG",   id: 6,  parentId: 4, branch: 'Left', fill:"#44D3AE"   },
    { Label: "Cooking", id: 7, parentId: 6, branch: 'Left', fill:"#44D3AE" },
    { Label: "Transport", id: 8, parentId: 6,branch: 'Left', fill:"#44D3AE" },
    { Label: "Petrol", id: 9, parentId: 3,  branch: 'Right', fill:"#FFC300"  },
    { Label: "Kerosene", id: 10, parentId: 3, branch: 'Right', fill:"#FFC300"  },
    { Label: "LPG", id: 11, parentId: 3, branch: 'Right',fill:"#FFC300" },
    { Label: "Diesel", id: 12, parentId: 3, branch: 'Right', fill:"#FFC300"},    
    { Label: "Coal Gas", id: 13, parentId: 5,branch: 'Left', fill:"#7C716F"   },
    { Label: "Coke", id: 14, parentId: 5, branch:"Left", fill:"#7C716F"  },
    { Label: "Coal Tar", id: 15, parentId: 5, branch: 'Left', fill:"#7C716F" },
    { Label:"Lightening", id:16,parentId:13,branch:'Left', fill:"#BCB9B6"},
    { Label:"Fuel", id:17,parentId:13,branch:'Left', fill:"#BCB9B6"},
    { Label:"Extracting Metals",id:18,parentId:14,branch:'Left', fill:"#BCB9B6"},
    { Label:"Used in Steel Manufacturing",id:19,parentId:14,branch:'Left', fill:"#BCB9B6"},
    { Label:"Paints",id:20,parentId:15,branch:'Left', fill:"#BCB9B6"},
    { Label:"Roof Materials",id:21,parentId:15,branch:'Left', fill:"#BCB9B6"},
    { Label:"Pesticides",id:22,parentId:15,branch:'Left', fill:"#BCB9B6"},
    { Label:"Explosives",id:23,parentId:15,branch:'Left', fill:"#BCB9B6"},
    { Label:"Naphthelenes",id:24,parentId:15,branch:'Left', fill:"#BCB9B6"},
    { Label:"Roads",id:25,parentId:15,branch:'Left', fill:"#BCB9B6"},
    { Label:"Manufacturing Medicine",id:26,parentId:15,branch:'Left', fill:"#BCB9B6"}
   ]
   
exports.mindMap = [
    { id: 1, Label: 'Creativity', fill: 'red', branch: 'Root' },
    { id: 3, Label: 'Brainstorming', parentId: 1, branch: 'Right', fill: 'red' },
    { id: 4, Label: 'Complementing', parentId: 1, branch: 'Left', fill: 'red' },
    { id: 22, Label: 'Sessions', parentId: 3, branch: 'subRight', fill: 'red' },
    { id: 23, Label: 'Generate', parentId: 3, branch: 'subRight', fill: 'red' },
    { id: 25, Label: 'Local', parentId: 22, branch: 'subRight' },
    { id: 26, Label: 'Remote', parentId: 22, branch: 'subRight' },
    { id: 27, Label: 'Individual', parentId: 22, branch: 'subRight' },
    { id: 28, Label: 'Teams', parentId: 22, branch: 'subRight' },
    { id: 29, Label: 'Ideas', parentId: 23, branch: 'subRight' },
    { id: 30, Label: 'Engagement', parentId: 23, branch: 'subRight' },
    { id: 31, Label: 'Product', parentId: 29, branch: 'subRight' },
    { id: 32, Label: 'Service', parentId: 29, branch: 'subRight' },
    { id: 33, Label: 'Business Direction', parentId: 29, branch: 'subRight' },
    { id: 34, Label: 'Empowering', parentId: 30, branch: 'subRight' },
    { id: 35, Label: 'Ownership', parentId: 30, branch: 'subRight' },
    { id: 50, Label: 'Information', parentId: 4, branch: 'subLeft' },
    { id: 51, Label: 'Expectations', parentId: 4, branch: 'subLeft' },
    { id: 53, Label: 'Competitors', parentId: 50, branch: 'subLeft' },
    { id: 54, Label: 'Products', parentId: 50, branch: 'subLeft' },
    { id: 55, Label: 'Features', parentId: 50, branch: 'subLeft' },
    { id: 56, Label: 'Other Data', parentId: 50, branch: 'subLeft' },
    { id: 59, Label: 'Organization', parentId: 51, branch: 'subLeft' },
    { id: 60, Label: 'Customer', parentId: 51, branch: 'subLeft' },
    { id: 61, Label: 'Staff', parentId: 51, branch: 'subLeft' },
    { id: 62, Label: 'Stakeholders', parentId: 51, branch: 'subLeft' },
];
exports.data = [
    {
        'Id': 'parent', 'Type': 'Server'
    },
    {
        'Id': 1, 'Source': 'parent', 'Type': 'Server'
    },
    {
        'Id': 2, 'Source': 'parent', 'Type': 'Server'
    },
    {
        'Id': 3, 'Source': 'parent', 'Type': 'Server'
    },
    {
        'Id': 4, 'Source': 'parent', 'Type': 'Server'
    },
    {
        'Id': 5, 'Source': 'parent', 'Type': 'Hub'
    },
    {
        'Id': 6, 'Source': 1, 'Type': 'Hub'
    },
    {
        'Id': 7, 'Source': 1, 'Type': 'Hub'
    },
    {
        'Id': 8, 'Source': 1, 'Type': 'Hub'
    },
    {
        'Id': 9, 'Source': 1, 'Type': 'Hub'
    },
    {
        'Id': 10, 'Source': 1, 'Type': 'Hub'
    },
    {
        'Id': 11, 'Source': 1, 'Type': 'Hub'
    },
    {
        'Id': 12, 'Source': 1, 'Type': 'Hub'
    },
    {
        'Id': 13, 'Source': 1, 'Type': 'Hub'
    },
    {
        'Id': 14, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 15, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 16, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 17, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 18, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 19, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 20, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 21, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 22, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 23, 'Source': 2, 'Type': 'Hub'
    },
    {
        'Id': 24, 'Source': 3, 'Type': 'Hub'
    },
    {
        'Id': 25, 'Source': 3, 'Type': 'Hub'
    },
    {
        'Id': 26, 'Source': 3, 'Type': 'Hub'
    },
    {
        'Id': 27, 'Source': 3, 'Type': 'Hub'
    },
    {
        'Id': 28, 'Source': 3, 'Type': 'Hub'
    },
    {
        'Id': 29, 'Source': 3, 'Type': 'Hub'
    },
    {
        'Id': 30, 'Source': 3, 'Type': 'Hub'
    },
    {
        'Id': 31, 'Source': 3, 'Type': 'Hub'
    },
    {
        'Id': 32, 'Source': 4, 'Type': 'Hub'
    },
    {
        'Id': 33, 'Source': 4, 'Type': 'Hub'
    },
    {
        'Id': 34, 'Source': 4, 'Type': 'Hub'
    },
    {
        'Id': 35, 'Source': 4, 'Type': 'Hub'
    },
    {
        'Id': 36, 'Source': 4, 'Type': 'Hub'
    },
    {
        'Id': 37, 'Source': 4, 'Type': 'Hub'
    },
    {
        'Id': 38, 'Source': 4, 'Type': 'Hub'
    },
    {
        'Id': 39, 'Source': 4, 'Type': 'Hub'
    },
];


