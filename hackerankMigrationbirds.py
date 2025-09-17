def migrastorybirds(arr):
        permanentNUmberOfMatches = 0
        currentNumOfMatches = 0
        type = arr[0]

        for i in range(len(arr)):
            for j in range(i+1, len(arr)):
                 if arr[i] == arr[j] :
                    currentNumOfMatches = currentNumOfMatches + 1

            if currentNumOfMatches > permanentNUmberOfMatches:
                permanentNUmberOfMatches = currentNumOfMatches
                type = arr[i]
            

            if currentNumOfMatches == permanentNUmberOfMatches and type > arr[i]:
                type = arr[i]
            
            currentNumOfMatches = 0
        print(type)

migrastorybirds([3,3,4,5,3,3])