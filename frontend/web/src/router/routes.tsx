const routes = {
    root: () => '/',
    login: () => 'login',
    register: () => 'register',
    passwordReset: () => 'password-reset',
    dashboard: () => '/dashboard',
    attendance: () => '/attendance',
    employee: () => '/employee',
    leave: () => '/leave',
    employeeRoles: () => '/employee/roles',
    employeeDepartment: () => '/employee/department',
    employeeFunction: () => '/employee/function',
    employeeCategory: () => '/employee/category',
    reportsAnalytics: () => '/reports-analytics',
    profileSettings: () => '/profile-settings',
    notifications: () => '/notifications',
    helpSupport: () => '/help-support',
    manage: () => '/manage',
    manageUsers: () => '/manage/users',
    manageRoles: () => '/manage/roles',
}

export default routes