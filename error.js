try {
    throw new Error('Something went wrong');
} catch (e) {
    console.log(e.message); // 'Something went wrong'
}
