export function getID(arr: any[]) : number {
    
    if(arr.length === 0) {
        return 1;
    }

    let max = -Infinity;
    for (let i = 0; i < arr.length; ++i) {
        if(arr[i].id > max) {
            max = arr[i].id;
        }
    }
    return max + 1;
}

export function removeID(arr: any[], id: number): any[] {
    return arr.filter(x => x.id !== id);
}