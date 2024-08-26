#    this algorithm count the number of oranges and apples that falls on a certain house
#   apples and oranges represents and array with values which are the distances which they fell
#   "a" is distance of apple tree from house
#   "b" is distance of orange tree from house
#   "s" is start and "t" is end point of house
#   "house" is found "a" and "b"
def countApplesAndOranges(s, t, a, b, apples, oranges):
    oranges_on_house = 0
    apples_on_house = 0
    
    for apple in apples:
        distance_fallen = a + apple
        if s <= distance_fallen <= t :
            apples_on_house += 1
            
    for orange in oranges:
        distance_fallen = b + orange
        if s <= distance_fallen <= t:
            oranges_on_house += 1
    print(f"{apples_on_house} apples fell on house" )
    print(f"{oranges_on_house} oranges on house")

countApplesAndOranges(7, 10, 4, 12, [2,3,-4], [3,-2,-4])
print("hello word")