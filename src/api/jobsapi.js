export const jobsCreatedByPromise = async(email) => {
    return fetch(`https://career-code-server-zeta.vercel.app/jobs/applications?email=${email}`, {
        credentials: 'include',
    })
        .then((res) => res.json())
}