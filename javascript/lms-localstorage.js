const saveCourseToStorage = (course) => {
  if(!verifyCourseExistanceInStorage(course)) {
    const localStorageSave = localStorage.getItem('savedCourses');
    let storage = localStorageSave ? localStorageSave.split(',') : [];
    storage.push(course); // ['course1',course2','course3', 'course4']
    localStorage.setItem('savedCourses', storage);
  }
}

const verifyCourseExistanceInStorage = (course) => {
  const localStorageSave = localStorage.getItem('savedCourses');
  let storage = localStorageSave ? localStorageSave.split(',') : false;
  const index = storage.indexOf(course);
  if(index > -1) {
    return true
  }
  return false;
}

const removeCourseFromStorage = (course) => {
  const localStorageSave = localStorage.getItem('savedCourses');
  let storage = localStorageSave ? localStorageSave.split(',') : false;
  const index = storage.indexOf(course);
  if (index > -1) {
    storage.splice(index, 1);
  }
  localStorage.setItem('savedCourses', storage);
}

$(window).load(function() {
  const coursename = window.location.pathname
  if(!verifyCourseExistanceInStorage("Awesome course")) {
    $('#save-course-btn').show();
  }
});
